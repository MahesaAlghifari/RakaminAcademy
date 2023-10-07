const express = require('express');
const router = express.Router();
const pool = require('../db/queries')


//menampilkan seluruh data category
router.get('/category', function (req, res){
    pool.query('SELECT * FROM public.category', (err, result) => {
        if(err) {
            throw err;
        }
        res.status(200).json(result.rows)
    })
});

//menampilkan list film berdasarkan category id
router.get('/category/:Id', function (req, res){
    pool.query(`SELECT * FROM public.film_category WHERE category_id = ${req.params.Id}`, (err, result) => {
        if(err) {
            throw err;
        }
        res.status(200).json(result.rows)
    })
});


module.exports = router;
