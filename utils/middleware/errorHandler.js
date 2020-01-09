const debug = require('debug')('app:errors');
const boom = require('@hapi/boom');
const { config } = require('../../config/');

function withErrorStack(err, stack) {
  if (config.dev) {
    return { ...err, stack };
  }

  return err;
}

function logError(err, req, res, next) {
  debug(err);
  next(err);
}

function wrapError(err, req, res, next) {
  if (!err.isBoom) {
    next(boom.badImplementation(err));
  }

  next(err);
}

function errorHandler(err, req, res, next) { // eslint-disable-line
  const {
    output: { statusCode, payload }
  } = err;
  res.status(statusCode || 500).json(withErrorStack(payload, err.stack));
}

module.exports = {
  wrapError,
  logError,
  errorHandler
};
