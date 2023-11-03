const packageName = require('../package.json').name
const fetch = require('node-fetch')

/*
 * Webpack plugin to check the exposes configuration in webpack.config.js for breaking changes.
 * This plugin will throw an error in case you are trying to remove/change and entry in the exposes section in webpack.config.js
 * that is currently being used in other MFEs.
 * To do that we just check current exposes against all MFEs deployed to production using data from the MFE Dashboard
*/

const PLUGIN_NAME = 'FederationPluginBackwardCapabilityCheck'

const queryBody = {
  variables: {
    environment: 'development',
    group: 'default',
  },
  query: 'query ($group: String!, $environment: String!) {\n  groups(name: $group) {\n    applications {\n      id\n      name\n      versions(latest: true, environment: $environment) {\n        modules {\n          id\n          name\n          requires\n          __typename\n        }\n        overrides {\n          id\n          name\n          version\n          __typename\n        }\n        consumes {\n          application {\n            id\n            name\n            __typename\n          }\n          name\n          usedIn {\n            file\n            __typename\n          }\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n',
}

class FederationCheckExposesPlugin {
  constructor(options) {
    this._options = options
  }


  apply(compiler) {
    compiler.hooks.thisCompilation.tap(PLUGIN_NAME, (compilation) => {
      compilation.hooks.processAssets.tapPromise(
        {
          name: PLUGIN_NAME,
          // this is the last compile stage
          stage: compilation.constructor.PROCESS_ASSETS_STAGE_REPORT,
        },
        () => this.checkConfigurations(compilation),
      )
    })
  }

  checkConfigurations(curCompiler) {
    return new Promise((resolve, reject) => {
      if(!this._options.exposes || Object.keys(this._options.exposes).length === 0) {
        const message = 'Your webpack.config.js file doesn\'t have any exposed entries in the federations section. An MFE project must have at least 1 exposed entry.'
        throw new Error(message)
      }

      if(this._options.exposes['./']) {
        console.log('\x1b[31m', '\n************************** Exposes config error **************************\n')
        console.log('\n You are trying to use "./" as exposes key that is not valid config, please use "." instead')
        console.log('\x1b[31m', '\n***********************************************************************************\n', '\x1b[0m')
        const message = 'Wrong exposes config'
        throw new Error(message)
      }

      fetch(this._options.dashboardURL, {
        method: 'POST',
        body: JSON.stringify(queryBody),
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json',
        },
      })
        .then(res => res.json())
        .then(data => {
          const consumes = this.getAllConsumes(data)
          const errors = this.validate(consumes, this._options.exposes)
          if(errors && errors.length) {
            this.logError(errors)
            const err = 'Breacking changes in exposes'
            curCompiler.errors.push(err)
            reject(err)
          } else {
            resolve()
          }
        })
        .catch(err => {
          console.log(err)
          const message = 'Can not validate the exposes section of webpack.config.js'
          curCompiler.errors.push(message)
          reject(message)
        })
    })
  }

  logError(errors) {
    console.log('\x1b[31m', '\n************************** Breaking MFE changes detected **************************\n')
    console.log('\n You are trying to remove/change expose entries in your MFE that are currently being used in other MFE projects')
    console.log('\n This will break production! Please make your exposes section in webpack.config.js backward compatible with the existing MFEs that depend on your MFE\n', '\x1b[0m')
    errors.forEach(({ key, value }) => {
      const importPath = [packageName, key].filter(vl => vl !== '.' && vl !== './').join('/')
      console.log('\x1b[36m', `\nimport from "${importPath}"`, '\x1b[0m')
      console.log(`\nis currently used in: ${value.join(', ')}`)
    })
    console.log('\x1b[31m', '\n***********************************************************************************\n', '\x1b[0m')
  }

  validate(consumes, exposes) {
    const erros = []
    consumes.forEach((value, key) => {
      if(!exposes[key] && !exposes[`./${key}`]) {
        erros.push({ value, key })
      }
    })
    return erros
  }

  getAllConsumes(data) {
    const consumes = new Map()
    if(data && data.data && data.data.groups && data.data.groups[0] && data.data.groups[0].applications && Array.isArray(data.data.groups[0].applications)) {
      data.data.groups[0].applications.forEach(({ id, versions }) => {
        if(versions && versions[0] && versions[0].consumes && Array.isArray(versions[0].consumes)) {
          versions[0].consumes.forEach(({ application, name }) => {
            if(application.id === packageName) {
              consumes.set(name, Array.from(new Set([...(consumes.get(name) || []), id])))
            }
          })
        }
      })
    }
    return consumes
  }
}

module.exports = FederationCheckExposesPlugin