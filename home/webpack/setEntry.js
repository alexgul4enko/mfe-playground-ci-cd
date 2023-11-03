const path = require('path');

function setEntry() {
  return {
    entry: {
      app: path.resolve(__dirname, '../src/index.tsx'),
    }
  };
}

module.exports = setEntry;
