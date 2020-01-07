const express = require('express');
const { config } = require('./config/');
const moviesApi = require('./routes/movies');
const { logError, errorHandler } = require('./utils/middleware/errorHandler');

const app = express();

// body parser
app.use(express.json());

moviesApi(app);

// Los middleware's deben ir despues de las rutas de api
app.use(logError);
app.use(errorHandler);

app.listen(config.port, function() {
  console.log(`Aplication running on http://localhost:${config.port}`);
});
