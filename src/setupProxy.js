const { createProxyMiddleware } = require('http-proxy-middleware')
module.exports = function (app) {
  app.use(
    '/reset',
    createProxyMiddleware({
      target: 'http://119.8.127.28:9091/',
      changeOrigin: true,
      pathRewrite: {
        '^/reset': '',
      },
    })
  )
}
