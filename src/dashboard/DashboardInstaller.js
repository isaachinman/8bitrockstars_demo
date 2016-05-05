var router = require('./DashboardRouter');

var installer = function(app) {
  app.use(['/dashboard'],router);
};

module.exports = installer;
