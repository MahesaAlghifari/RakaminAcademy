const express = require('express');
const router = express.Router();
const db = require('../db'); 


// Route untuk mendapatkan semua pengguna dengan pagination
router.get('/', async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    try {
        const offset = (page - 1) * limit;
        const { rows } = await db.query('SELECT * FROM users OFFSET $1 LIMIT $2', [offset, limit]);
        res.json(rows);
    } catch (error) {
        console.error('Error executing query', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


module.exports = router;
