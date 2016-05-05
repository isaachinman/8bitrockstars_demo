var router = require('./LoginRouter');

var installer = function(app) {
  app.use(['/index.html?','/'],router);
};

module.exports = installer;
