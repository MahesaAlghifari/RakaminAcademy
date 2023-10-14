const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./middleware/auth');
const userRoutes = require('./routes/users');
const movieRoutes = require('./routes/movies');
const morgan = require('morgan');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const path = require('path');

const app = express();
const port = 3000;

app.use(morgan('combined')); 

app.use(bodyParser.json());

app.use('/middleware/auth', authRoutes);
app.use('/routes/users', userRoutes);
app.use('/routes/movies', movieRoutes);

const options = {
    definition: {
        openapi: '3.0.0',
        info :{
            title : 'Express With Swagger',
            version : '0.1.0',
            description : 'This is a simple CRUD API application made with Express and documented with Swagger ',
        },
        servers: [
            {
                url : 'http://localhost:3000'
            },
        ],
    },
    apis: ['./routes/*']
};

const specs = swaggerJsdoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.listen(port, () => {
    console.log(`Server berjalan di port ${port}`);
});
