require('./utils/init-env');
const Dotenv = require('dotenv-webpack');
const path = require('path');

function setEnv() {
  return {
    plugins: [
      new Dotenv({
        path: path.join(__dirname, '../', process.env.ENVFILE || '.env.local'),
        safe: path.join(__dirname, '../.env.local'),
        allowEmptyValues: true,
        systemvars: true,
        defaults: false
      })
    ]
  };
}

module.exports = setEnv;
