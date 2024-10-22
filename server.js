const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const dataRoute = require('./routes/data.routes.js');
const port = process.env.PORT || 10000;

dotenv.config();
app.use(express.json());
app.use('/todo/goals', dataRoute);

mongoose
    .connect(process.env.URI)
    .then(() => {
        console.log('*** connected to database!');
        app.listen(port, () => {
            console.log('*** server is running on PORT');
        });
    })
    .catch(() => {
        console.log('*** connection to the server failed!');
    });
