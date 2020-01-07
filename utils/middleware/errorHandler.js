const { config } = require('../../config/');

function withErrorStack(err, stack) {
  if (config.dev) {
    return { err, stack };
  }

  return error;
}

function logError(err, req, res, next) {
  console.log(err);
  next(err);
}

function errorHandler(err, req, res, next) {
  res.status(err.status || 500).json(withErrorStack(err.message, err.stack));
}

module.exports = {
  withErrorStack,
  logError,
  errorHandler
}