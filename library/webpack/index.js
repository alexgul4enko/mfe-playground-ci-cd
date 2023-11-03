require('./utils/init-env');
const runDevServer = require('./devServer');
const generateSourceMaps = require('./generateSourceMaps');
const setMode = require('./setMode');
const files = require('./files');
const css = require('./css');
const sass = require('./sass');
const HTMLTemplate = require('./HTMLTemplate');
const cleanDirectory = require('./cleanDirectory');
const minicss = require('./minicss');
const optimisation = require('./optimisation');
const setEnv = require('./setEnv');
const setTarget = require('./setTarget');
const resolveExtensions = require('./resolveExtensions');
const resolveModules = require('./resolveModules');
const setEntry = require('./setEntry');
const setOutput = require('./setOutput');
const typescript = require('./typescript');
const modulejs = require('./modulejs');
const fastRefresh = require('./fastRefresh');
const federation = require('./federation')

module.exports.runDevServer = runDevServer;
module.exports.setMode = setMode;
module.exports.generateSourceMaps = generateSourceMaps;
module.exports.files = files;
module.exports.css = css;
module.exports.sass = sass;
module.exports.HTMLTemplate = HTMLTemplate;
module.exports.cleanDirectory = cleanDirectory;
module.exports.minicss = minicss;
module.exports.optimisation = optimisation;
module.exports.setEnv = setEnv;
module.exports.setTarget = setTarget;
module.exports.resolveExtensions = resolveExtensions;
module.exports.resolveModules = resolveModules;
module.exports.setEntry = setEntry;
module.exports.setOutput = setOutput;
module.exports.typescript = typescript;
module.exports.modulejs = modulejs;
module.exports.fastRefresh = fastRefresh;
module.exports.federation = federation;
