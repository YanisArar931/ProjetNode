require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const apiRouter = require('./routes');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const cors = require('cors');

// Autorise l'accès exterieur au serveur
app.use(cors());

//Parse des requetes en JSON
app.use(express.json());

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Book Api',
            version: '1.0.0'
        }
    },
    apis: ['./routes/*.js']
};
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => {
        console.log('Connection has been etablished successfully');
    })
    .catch((error) => {
        console.error('Unable to connect database: ', error);
    });

app.get('/', (req, res) => {
    res.send('Hello word');
});

app.use('/api', apiRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
