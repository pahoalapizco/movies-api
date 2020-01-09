const assert = require('assert');
const proxyquire = require('proxyquire');

const { moviesMock } = require('../utils/mocks/movies');
const {
  MongoLibMock,
  getAllStub,
  createStub
} = require('../utils/mocks/mongoLib');

describe('Services - Movies', function() {
  const MoviesService = proxyquire('../services/movies', {
    '../lib/db': MongoLibMock
  });

  const moviesServices = new MoviesService();

  describe('When getMovies method is called', async function() {
    it('Should call the getAll MongoLib method', async function() {
      await moviesServices.getMovies({});
      assert.strictEqual(getAllStub.called, true);
    });

    it('Should return an array o movies', async function() {
      const result = await moviesServices.getMovies({});
      const expected = moviesMock;
      assert.deepEqual(result, expected);
    });

    it('When createMovie method is called', async function() {
      await moviesServices.createMovie(moviesMock[0]);
      assert.strictEqual(createStub.called, true);
    });
    it('Should returns an id ', async function() {
      const result = await moviesServices.createMovie(moviesMock[0]);
      const expected = moviesMock[0].id;

      assert.strictEqual(result, expected);
    });
  });
});
