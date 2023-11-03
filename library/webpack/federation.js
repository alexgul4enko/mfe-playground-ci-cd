const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const RemotesPlugin = require('./remotesPlugin')
const packData = require('../package.json')
const DashboardPlugin = require("@module-federation/dashboard-plugin");
const MFEManifest = require("./manifest.json")
const appName = packData.name
const FederationCheckExposesPlugin = require('./federationCheckExposesPlugin')

function camelCase(str) {
    // Using replace method with regEx
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return index == 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '').replaceAll('-', '');
}


function makeRemotes() {
  return Object.entries(MFEManifest).reduce((res, [key, value])=>{
    if(key === packData.name) {
      return res
    }
    const name = camelCase(key)
    return {
      ...res,
      [key]: `promise new Promise((resolve, reject) => {
      function getVersion () {
        if(window["${key}"]) {
          return Promise.resolve(window["${key}"]);
        }
        /* runtime linking*/
        if(window.sessionStorage.getItem('manifest')){
          const manifest = JSON.parse(window.sessionStorage.getItem('manifest'))
          if(typeof manifest["${appName}"] === 'object' && manifest["${appName}"]["${key}"]) {
            return Promise.resolve(manifest["${appName}"]["${key}"]);
          }
            return Promise.resolve(manifest["${key}"].version);
          
        }
        /*compile time linking*/
        if("${process.env[name] || ''}"){
            return Promise.resolve("${process.env[name]}");
        }

        if(window.manifest){
          if(typeof window.manifest["${appName}"] === 'object' && window.manifest["${appName}"]["${key}"]) {
            return Promise.resolve(window.manifest["${appName}"]["${key}"]);
          }
            return Promise.resolve(window.manifest["${key}"].version);
          
        }
        return Promise.resolve('${value.version}');
      }
      getVersion()
        .then(function (_version) {
          const version = _version.includes('http') ? '' : _version
          var name = '${camelCase(key)}' + version.replaceAll('.', '_');
          var url = _version.includes('http') ? _version : 'http://localhost:3020/${key}/' + _version + '/remoteEntry.js'
          console.log({name, url})
          new Promise(function (resolve, reject) {
            var __webpack_error__ = new Error()
            if (typeof window[name] !== 'undefined') return resolve();
            __webpack_require__.l(
              url,
              function (event) {
                if (typeof window[name] !== 'undefined') return resolve();
                var errorType = event && (event.type === 'load' ? 'missing' : event.type);
                var realSrc = event && event.target && event.target.src;
                __webpack_error__.message =
                  'Loading script failed.\\n(' + errorType + ': ' + realSrc + ')';
                __webpack_error__.name = 'ScriptExternalLoadError';
                __webpack_error__.type = errorType;
                __webpack_error__.request = realSrc;
                reject(__webpack_error__);
              },
              name,
            );
          }).then(function () {
            resolve(window[name])
          }).catch(reject)
        })
    })`

    }
  },{})
}

const remotes= makeRemotes()


const exposes = {
  '.': './src/app'
}


function federation(isDev) {
  return {
    plugins: [
      new ModuleFederationPlugin({
        name: packData.name,
        filename: 'remoteEntry.js',
        library: {
          type: 'var',
          name: camelCase(packData.name) + (isDev ? '' :packData.version.replaceAll('.', '_')),
        },

        exposes: exposes,
        remoteType: 'script',
        ...(Object.keys(remotes).length ? {remotes} : {}),
        shared: {
          react: {
            singleton: true,
          },
          'react-dom': {
            singleton: true,
          }
        }
      }),
      new RemotesPlugin(),
      isDev ? undefined : new DashboardPlugin({
              dashboardURL: "http://localhost:3000/api/update",
              publishVersion: packData.version,
              versionStrategy: packData.version,
              metadata: {
                remote: `http://localhost:8081/${packData.name}/${packData.version}/remoteEntry.js`,
                singleton: packData.singleton
              },
            }),
      isDev ? undefined : new FederationCheckExposesPlugin({ exposes: exposes, dashboardURL: 'http://localhost:3000/api/graphql' }),
    ].filter(Boolean)
  };
}

module.exports = federation;
