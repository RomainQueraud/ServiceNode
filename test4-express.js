var express = require('express');

var application = express();


// Configure security
if (configuration && configuration.secured) {
  application.use(authentication());
}

// Configure content parsers
application.use(bodyParser.json());
// XML
application.use(xmlBodyParser());
// YAML
application.use(yamlBodyParser());


// Configure domain middleware for errors
if (configuration && configuration.useDomain) {
  application.use(expressDomain);
}


// Configure Web API routes
application.use('/', webApiRoutes);


// Configure generic error handler
application.use(errorHandler);

application.use(express.static(path.join(__dirname, 'public')));

exports.NotFoundError = function(message) {
  Error.call(this);
  this.statusCode = 404;
  this.message = message;
  this.name = 'NotFound';
};
util.inherits(exports.NotFoundError, Error);

module.exports = function(err, req, res, next) {
  res.status(err.statusCode || 500);
  var errorObj = {
    message: err.message,
    errors: err.errors
  };
  res.json(errorObj);
};
