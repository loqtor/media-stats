var express = require('express');
var bodyParser = require('body-parser');

module.exports = function(app) {
  app.use(bodyParser.urlencoded({ extended: false }));

  var config = {
    app: app
  };

  // require('./../stand-alone-server/mock/routes')(config);

  var app = config.app;

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  var router = express.Router();

  router.get('/fb-posts', function(req, res) {
    res.send({
      test: 'This is a fb test'
    })
  });

  router.get('/tweets', function(req, res) {
    res.send({
      test: 'This is a twitter test'
    })
  });

  app.use('/api', router);
};
