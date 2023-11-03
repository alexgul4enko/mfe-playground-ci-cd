const extractUrlAndGlobal = require('webpack/lib/util/extractUrlAndGlobal')
const { RawSource } = require('webpack-sources')
const PLUGIN_NAME = 'ExternalTemplateRemotesPlugin'
const ShareRuntimeModule = require('webpack/lib/sharing/ShareRuntimeModule')
const RuntimeGlobals = require('webpack/lib/RuntimeGlobals')
const Template = require('webpack/lib/Template')
const ConsumeSharedRuntimeModule = require('webpack/lib/sharing/ConsumeSharedRuntimeModule')


class TestShareRuntimeModule extends ShareRuntimeModule {
  generate() {
    const code = super.generate()
    const templateToSplit = 'var activeVersion = versions[version];'
    const splitIndex = code.indexOf(templateToSplit) + templateToSplit.length
    return Template.asString([
      code.slice(0, splitIndex),
      '        if(window.__sharedModules__ && window.__sharedModules__[name]) {',
      '          const runtimeSharedFrom = window.__sharedModules__[name];',
      '          console.log(uniqueName,runtimeSharedFrom, "uniqueNameasdasd");',
      '          if(runtimeSharedFrom === uniqueName) {',
      '            versions[version] = { get: factory, from: uniqueName, eager: !!eager, runtimeShared: true };',
      '            return;',
      '          }',
      '          else {',
      '            if(activeVersion && activeVersion.runtimeShared === true) return;',
      '          }',
      '        }',
      code.slice(splitIndex),
    ])
  }
}

// Webpack Runtime module to generate modules map with an algorithm that could resolve shared modules in runtime
class TestConsumeSharedRuntimeModule extends ConsumeSharedRuntimeModule {
  generate() {
    const code = super.generate()
    if(!code) { return code }
    const templateToSplit = 'var versions = scope[key];'
    const splitIndex = code.indexOf(templateToSplit, code.indexOf('findSingletonVersionKey')) + templateToSplit.length
    return Template.asString([
      code.slice(0, splitIndex),
      '    const MFEName = window.__sharedModules__ && window.__sharedModules__[key]',
      '    const runtimeShared = Object.keys(versions).reduce((a, b) => {',
      '         if(versions[b].from === MFEName) return b;',
      '         return a;',
      '    }, 0);',
      '    if(runtimeShared) return runtimeShared;',

      code.slice(splitIndex),
    ])
  }
}

// https://github.com/module-federation/module-federation-examples/pull/557
class ExternalTemplateRemotesPlugin {
  apply(compiler) {
    /* modify federation code snippet to resolve singleton module version */
    compiler.hooks.thisCompilation.tap(PLUGIN_NAME, (compilation) => {
      compilation.hooks.additionalTreeRuntimeRequirements.tap(
        'RuntimePlugin',
        (chunk, set) => {
          set.add(RuntimeGlobals.module)
          set.add(RuntimeGlobals.moduleCache)
          set.add(RuntimeGlobals.moduleFactoriesAddOnly)
          set.add(RuntimeGlobals.shareScopeMap)
          set.add(RuntimeGlobals.initializeSharing)
          set.add(RuntimeGlobals.hasOwnProperty)
          compilation.addRuntimeModule(
            chunk,
            new TestConsumeSharedRuntimeModule(set),
          )
          return true
        },
      )

      compilation.hooks.runtimeModule.tap(PLUGIN_NAME, module => {
        if(module.constructor.name === 'ConsumeSharedRuntimeModule') {
          module.generate = function() { return null }
        }
      })
    })


    compiler.hooks.compilation.tap(PLUGIN_NAME, compilation => {
      // override ShareRuntimeModule
      compilation.hooks.runtimeRequirementInTree
        .for(RuntimeGlobals.shareScopeMap)
        .tap('RuntimePlugin', (chunk, set) => {
          compilation.addRuntimeModule(chunk, new TestShareRuntimeModule())
          return true
        })
    })

    compiler.hooks.make.tap(PLUGIN_NAME, compilation => {
      const scriptExternalModules = []
      // override remotee entries URLS
      compilation.hooks.buildModule.tap(PLUGIN_NAME, module => {
        if(module.constructor.name === 'ExternalModule' && module.externalType === 'script') {
          scriptExternalModules.push(module)
        }
      })

      // remove original ShareRuntimeModule
      compilation.hooks.runtimeModule.tap(PLUGIN_NAME, (module, chunk) => {
        if(module.constructor.name === 'ShareRuntimeModule') {
          chunk.removeModule(module)
        }
      })


      compilation.hooks.afterCodeGeneration.tap(PLUGIN_NAME, function() {
        scriptExternalModules.forEach(module => {
          const urlTemplate = extractUrlAndGlobal(module.request)[0]
          const urlExpression = toExpression(urlTemplate)
          const sourceMap = compilation.codeGenerationResults.get(module).sources
          const rawSource = sourceMap.get('javascript')
          sourceMap.set(
            'javascript',
            new RawSource(rawSource.source().replace(`"${urlTemplate}"`, urlExpression)),
          )
        })
      })
    })
  }
}

function toExpression(templateUrl) {
  const result = []
  const current = []
  let isExpression = false
  let invalid = false
  for(const c of templateUrl) {
    if(c === '[') {
      if(isExpression) {
        invalid = true
        break
      }
      isExpression = true
      if(current.length) {
        result.push(`"${current.join('')}"`)
        current.length = 0
      }
    } else if(c === ']') {
      if(!isExpression) {
        invalid = true
        break
      }
      isExpression = false
      if(current.length) {
        result.push(`${current.join('')}`)
        current.length = 0
      }
      current.length = 0
    } else {
      current.push(c)
    }
  }
  if(isExpression || invalid) {
    throw new Error(`Invalid template URL "${templateUrl}"`)
  }
  if(current.length) {
    result.push(`"${current.join('')}"`)
  }
  return result.join(' + ')
}

module.exports = ExternalTemplateRemotesPlugin