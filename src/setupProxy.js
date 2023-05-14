const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://baba-ka-dhabaa.netlify.app/', // Replace with your API URL
      changeOrigin: true,
    })
  );
};
