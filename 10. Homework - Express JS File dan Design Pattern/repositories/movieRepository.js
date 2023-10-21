const { Pool } = require('pg');
const config = require('../config');

const pool = new Pool(config);

class MovieRepository {
  static async getAllMovies() {
    const client = await pool.connect();
    try {
      const result = await client.query('SELECT * FROM movies');
      return result.rows;
    } finally {
      client.release();
    }
  }

  static async getMovieById(movieId) {
    const client = await pool.connect();
    try {
      const result = await client.query('SELECT * FROM movies WHERE id = $1', [movieId]);
      return result.rows[0];
    } finally {
      client.release();
    }
  }

  static async createMovie(movieData) {
    const client = await pool.connect();
    try {
      const { title, genres, year } = movieData;
      const result = await client.query('INSERT INTO movies (title, genres, year) VALUES ($1, $2, $3) RETURNING id', [title, genres, year]);
      return result.rows[0].id;
    } finally {
      client.release();
    }
  }

  static async updateMovie(movieId, movieData) {
    const client = await pool.connect();
    try {
      const { title, genres, year } = movieData;
      await client.query('UPDATE movies SET title = $1, genres = $2, year = $3 WHERE id = $4', [title, genres, year, movieId]);
      return true;
    } finally {
      client.release();
    }
  }

  static async deleteMovie(movieId) {
    const client = await pool.connect();
    try {
      await client.query('DELETE FROM movies WHERE id = $1', [movieId]);
      return true;
    } finally {
      client.release();
    }
  }
}

module.exports = MovieRepository;
