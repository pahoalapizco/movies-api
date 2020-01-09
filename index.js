const debug = require('debug')('app:server')
const express = require('express');
const { config } = require('./config/');
const moviesApi = require('./routes/movies');
const {
  logError,
  errorHandler,
  wrapError
} = require('./utils/middleware/errorHandler');
const notFoundHandler = require('./utils/middleware/notFoundHandler');

const app = express();

// body parser
app.use(express.json());

moviesApi(app);

// catch 404 error
app.use(notFoundHandler);

// Los middleware's deben ir despues de las rutas de api
// ERRORS!
app.use(logError);
app.use(wrapError);
app.use(errorHandler);

app.listen(config.port, function() {
  debug(`Aplication running on http://localhost:${config.port}`);
});
