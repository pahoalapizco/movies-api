const joi = require('@hapi/joi');

/**
 * /^ = Inica expresión regurar.
 * [] = incluye los caracteres.
 * {24} = indica la longitud de la cadena
 * $/ = Termina expresión regurar-
 */
const movieIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);

const createMovieSchema = {
  title: joi.string().max(80).required(),
  year: joi.number().min(1888).max(2077).required(),
  cover: joi.string().uri().required(),
  description: joi.string().max(300).required(),
  duration: joi.number().min(1).max(300).required(),
  contentRating: joi.string().max(5).required(),
  source: joi.string().uri().required(),
  tags: joi.array().items(joi.string().max(50))
};

const updateMovieSchema = {
  title: joi.string().max(80),
  year: joi.number().min(1888).max(2077),
  cover: joi.string().uri(),
  description: joi.string().max(300),
  duration: joi.number().min(1).max(300),
  contentRating: joi.string().max(5),
  source: joi.string().uri(),
  tags: joi.array().items(joi.string().max(50))
}; 

module.exports = {
  movieIdSchema,
  createMovieSchema,
  updateMovieSchema
};
