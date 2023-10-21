const { Pool } = require('pg');
const config = require('../config');

const pool = new Pool(config);

class UserRepository {
  static async getUserById(userId) {
    const client = await pool.connect();
    try {
      const result = await client.query('SELECT * FROM users WHERE id = $1', [userId]);
      return result.rows[0];
    } finally {
      client.release();
    }
  }

  static async createUser(userData) {
    const client = await pool.connect();
    try {
      const { email, gender, password, role } = userData;
      const result = await client.query('INSERT INTO users (email, gender, password, role) VALUES ($1, $2, $3, $4) RETURNING id', [email, gender, password, role]);
      return result.rows[0].id;
    } finally {
      client.release();
    }
  }

  static async updateUser(userId, userData) {
    const client = await pool.connect();
    try {
      const { email, gender, password, role } = userData;
      await client.query('UPDATE users SET email = $1, gender = $2, password = $3, role = $4 WHERE id = $5', [email, gender, password, role, userId]);
      return true;
    } finally {
      client.release();
    }
  }

  static async deleteUser(userId) {
    const client = await pool.connect();
    try {
      await client.query('DELETE FROM users WHERE id = $1', [userId]);
      return true;
    } finally {
      client.release();
    }
  }
}

module.exports = UserRepository;
