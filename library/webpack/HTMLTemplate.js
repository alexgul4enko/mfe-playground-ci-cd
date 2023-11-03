const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

function HTMLTemplate() {
  const template = path.resolve(__dirname, '../public/index.html');
  return {
    plugins: [
      new HtmlWebpackPlugin({
        template,
        title: 'APP',
      })
    ]
  };
}

module.exports = HTMLTemplate;
