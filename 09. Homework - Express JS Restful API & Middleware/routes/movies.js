const express = require('express');
const router = express.Router();
const db = require('../db'); 

router.get('/', async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10; 

    try {
        const offset = (page - 1) * limit;
        const { rows } = await db.query('SELECT * FROM movies OFFSET $1 LIMIT $2', [offset, limit]);
        res.json(rows);
    } catch (error) {
        console.error('Error executing query', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


/**
 * @swagger
 * tags:
 *   name: Movies
 *   description: API to manage movies
 * definitions:
 *   Movie:
 *     type: object
 *     properties:
 *       id:
 *         type: integer
 *       title:
 *         type: string
 *       genre:
 *         type: string
 *     example:
 *       id: 1
 *       title: Movie Title
 *       genre: Action
 */

/**
 * @swagger
 * /movies:
 *   get:
 *     summary: Get a list of movies
 *     tags: [Movies]
 *     responses:
 *       200:
 *         description: Successful operation
 *         schema:
 *           type: array
 *           items:
 *             $ref: '#/definitions/Movie'
 *   post:
 *     summary: Create a new movie
 *     tags: [Movies]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/definitions/Movie'
 *     responses:
 *       200:
 *         description: Movie created successfully
 *         schema:
 *           $ref: '#/definitions/Movie'
 *       500:
 *         description: Internal server error
 *   put:
 *     summary: Update an existing movie
 *     tags: [Movies]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *         description: ID of the movie to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/definitions/Movie'
 *     responses:
 *       200:
 *         description: Movie updated successfully
 *         schema:
 *           $ref: '#/definitions/Movie'
 *       404:
 *         description: Movie not found
 *       500:
 *         description: Internal server error
 *   delete:
 *     summary: Delete a movie
 *     tags: [Movies]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *         description: ID of the movie to delete
 *     responses:
 *       200:
 *         description: Movie deleted successfully
 *       404:
 *         description: Movie not found
 *       500:
 *         description: Internal server error
 */


module.exports = router;
