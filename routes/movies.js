const express = require('express')
const { moviesMock } = require('../utils/mocks/movies')

function moviesApi (app) {
  const router = express.Router()
  
  app.use('/api/movies', router)

  router.get('/', async function(req, res) {
    try {
      const movies = await Promise.resolve(moviesMock)

      res.status(200).json({
        data: movies,
        message: 'Movies listed'
      })
    } catch (error) {
      next(error)
    }
  })

  router.get('/:movieId', async function(req, res) {
    const { movieId } = req.params
    try {
      const movies = await Promise.resolve(moviesMock.find(movie => movie.id === movieId))

      res.status(200).json({
        data: movies,
        message: 'Movie retrived'
      })
    } catch (error) {
      next(error)
    }
  })

  router.post('/', async function(req, res) {
    try {
      const createdMovieId = await Promise.resolve(moviesMock[0].id)

      res.status(201).json({
        data: createdMovieId,
        message: 'Movie created'
      })
    } catch (error) {
      next(error)
    }
  })

  router.put('/:movieId', async function(req, res) {
    const { movieId } = req.params
    try {
      const updatedMovieId = await Promise.resolve(moviesMock[0].id)

      res.status(200).json({
        data: updatedMovieId,
        message: 'Movie updated'
      })
    } catch (error) {
      next(error)
    }
  })

  router.delete('/:movieId', async function(req, res) {
    const { movieId } = req.params
    try {
      const deletedMovieId = await Promise.resolve(moviesMock[0].id)

      res.status(200).json({
        data: deletedMovieId,
        message: 'Movie deleted'
      })
    } catch (error) {
      next(error)
    }
  })

}

module.exports = moviesApi
