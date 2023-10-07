const express = require('express');
const app = express();
const port = 2019
const pool = require('./db/queries');

const filmRouter = require('./router/film')
const categoryRouter = require('./router/category')

app.use('/', filmRouter)
app.use('/', categoryRouter)

// untuk menampilkan diport aplikasi ini berjalan
app.listen(port, () =>{
    console.log(`port ini berjalan di ${port}`)
});

// untuk menampilkan apakah database connect atau tidak
pool.connect((err, res) => {
    if (err){
        console.error('connection error', err.stack);
    }else{
        console.log('connected');
    }
})

