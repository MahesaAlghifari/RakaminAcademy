const express = require('express');
const router = express.Router();
const pool = require('../db/queries')

//menampilkan seluruh data film
router.get('/film', function (req, res){
    pool.query('SELECT * FROM public.film ORDER BY film_id ASC', (err, result) => {
        if(err) {
            throw err;
        }
        res.status(200).json(result.rows)
    })
});

//menampilkan film berdasarkan id
router.get('/film/:Id', function (req, res){
    pool.query(`SELECT * FROM public.film WHERE film_id = ${req.params.Id}`, (err, result) => {
        if(err) {
            throw err;
        }
        res.status(200).json(result.rows)
    })
});

module.exports = router;