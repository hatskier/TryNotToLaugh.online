module.exports = {
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding'
    }
  },
  css: {
    loaderOptions: {
      sass: {
        includePaths: ['./node_modules']
      }
    }
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/repository-name/' : '/'
}
