const { createProxyMiddleware } = require("http-proxy-middleware")
module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://hc-app-api.ap-southeast-1.elasticbeanstalk.com",
      changeOrigin: true,
      /*  pathRewrite: {
        "^/reset": "",
      }, */
    })
  )
}
