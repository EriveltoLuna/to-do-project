const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const Data = require('./schema/data.schema.js');
const app = express();
const dataRoute = require('./routes/data.routes.js');

dotenv.config();
app.use(express.json());
app.use('/todo/goals', dataRoute);

mongoose
    .connect(process.env.URI)
    .then(() => {
        console.log('*** connected to database!');
        app.listen(3000, () => {
            console.log('*** server is running on 3000');
        });
    })
    .catch(() => {
        console.log('*** connection to the server failed!');
    });
