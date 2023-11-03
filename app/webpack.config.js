const blocks = require('./webpack');
const { merge } = require('webpack-merge');
const isDev = process.env.NODE_ENV !== 'production';
const isTest = process.env.CY === 'TRUE';

module.exports = merge([
  blocks.setEntry(),
  blocks.resolveExtensions(),
  blocks.resolveModules(),
  blocks.setOutput(),
  blocks.setMode(isDev),
  blocks.runDevServer(isDev),
  blocks.generateSourceMaps(isDev),
  blocks.modulejs(),
  blocks.typescript(isDev, isTest),
  blocks.files(),
  blocks.css(isDev),
  blocks.sass(),
  blocks.HTMLTemplate(isDev),
  blocks.cleanDirectory(),
  blocks.minicss(isDev),
  blocks.optimisation(isDev, isTest),
  blocks.setEnv(),
  blocks.setTarget(isDev),
  blocks.fastRefresh(isDev, isTest),
  blocks.federation(isDev)
]);
