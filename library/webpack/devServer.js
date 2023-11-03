function devServer(isDevelopment) {
  if (!isDevelopment) {
    return {};
  }
  return {
    devServer: {
      client: {
        overlay: false
      },
      devMiddleware: {
        publicPath: '/'
      },
      headers: {
    'Access-Control-Allow-Origin': '*'
  },
      port: process.env.PORT || 3000,
      historyApiFallback: true,
      liveReload: false,
      open: false,
      hot: false,
      host: process.env.DEV_SERVER_HOST || 'localhost',
      https: false,
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      allowedHosts: ['all']
    }
  };
}

module.exports = devServer;
