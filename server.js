const express = require('express');
const mongoose = require('mongoose');
const Data = require('./schema/data.schema.js');
const app = express();
const dataRoute = require('./routes/data.routes.js');

app.use(express.json());
app.use('/todo/goals', dataRoute);

mongoose
    .connect(
        'mongodb+srv://eriveltoferreiralunafilho:JJr0CqtLopeAHC1m@to-do-project.hzpro.mongodb.net/?retryWrites=true&w=majority&appName=to-do-project'
    )
    .then(() => {
        console.log('*** connected to database!');
        app.listen(3000, () => {
            console.log('*** server is running on 3000');
        });
    })
    .catch(() => {
        console.log('*** connection to the server failed!');
    });
