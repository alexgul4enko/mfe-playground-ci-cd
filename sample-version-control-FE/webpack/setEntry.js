const path = require('path');

function setEntry() {
  return {
    entry: {
      app: path.resolve(__dirname, '../src/index.tsx'),
      styles: path.resolve(__dirname, '../src/styles/index.scss')
    }
  };
}

module.exports = setEntry;
