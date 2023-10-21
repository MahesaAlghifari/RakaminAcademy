const Movie = require('../models/movie');

const movieController = {
  getAllMovies: async (req, res) => {
    try {
      const movies = await Movie.findAll();
      res.json(movies);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getMovieById: async (req, res) => {
    const movieId = req.params.id;
    try {
      const movie = await Movie.findByPk(movieId);
      if (movie) {
        res.json(movie);
      } else {
        res.status(404).json({ error: 'Movie not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  createMovie: async (req, res) => {
    const { title, genres, year } = req.body;
    const photoPath = req.file ? req.file.path : null; // Dapatkan path file foto jika ada
    try {
      const newMovie = await Movie.create({ title, genres, year, photo: photoPath });
      res.status(201).json(newMovie);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  updateMovie: async (req, res) => {
    const movieId = req.params.id;
    const { title, genres, year } = req.body;
    const photoPath = req.file ? req.file.path : null; // Dapatkan path file foto jika ada
    try {
      const movie = await Movie.findByPk(movieId);
      if (movie) {
        await movie.update({ title, genres, year, photo: photoPath });
        res.json(movie);
      } else {
        res.status(404).json({ error: 'Movie not found' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  deleteMovie: async (req, res) => {
    const movieId = req.params.id;
    try {
      const movie = await Movie.findByPk(movieId);
      if (movie) {
        await movie.destroy();
        res.json({ message: 'Movie deleted successfully' });
      } else {
        res.status(404).json({ error: 'Movie not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = movieController;
