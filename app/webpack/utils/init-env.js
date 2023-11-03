const dotenvExpand = require('dotenv-expand');
const dotenv = require('dotenv');
const packg = require('../../package.json');

process.env.APP_NAME = packg.name

dotenv.config({
  path: process.env.ENVFILE
});

const configLocal = dotenv.config({
  path: '.env.local'
});

dotenvExpand.expand(configLocal);

module.exports = process.env;
