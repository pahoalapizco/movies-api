const MongoLib = require('../lib/db')

class MoviesService {
  constructor() {
    this._collection = 'movies',
    this._mongoDB = new MongoLib()
  }

  async getMovies ({ tags }) {
    const query = tags && { tags: { $in: tags }} // $in -> busca en la collection lo que va en su valor, 
    const movies = await this._mongoDB.getAll(this._collection, query)
    return movies || []
  }

  async getMovie ({ movieId }) {
    const movie = await this._mongoDB.get(this._collection, movieId)
    return movie || {}
  }

  async createMovie ({ movie }) {
    const createdMovieId = await this._mongoDB.create(this._collection, movie)
    return createdMovieId || ''
  }

  async updateMovie ({ movieId, movie } = {}) {
    const updatedMovieId = await this._mongoDB.update(this._collection, movieId, movie)
    return updatedMovieId || ''
  }

  async deleteMovie ({ movieId }) {
    const deledMovieId = await this._mongoDB.delete(this._collection, movieId)
    return deledMovieId || ''
  }
}

module.exports = MoviesService