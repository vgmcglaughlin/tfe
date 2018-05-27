'use strict';

const loopback = require('loopback');
const boot = require('loopback-boot');
const history = require('connect-history-api-fallback');

const app = module.exports = loopback();

app.use(history({
  rewrites: [
    { from: /\/explorer/, to: '/explorer' },
    { from: /\/.*/, to: '/index.html' },
  ],
  htmlAcceptHeaders: ['text/html', 'application/js']
}));

app.use(loopback.token({
  model: app.models.accessToken,
  currentUserLiteral: 'me'
}));

app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    const baseUrl = app.get('url').replace(/\/$/, '');
    console.log('Web server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      const explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module)
    app.start();
});
