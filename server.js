const express = require('express');
const mongoose = require('mongoose');
const Data = require('./schema/data.schema.js');
const app = express();

app.use(express.json());

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

app.post('/todo/goals', async (req, res) => {
    try {
        const goal = await Data.create(req.body);
        res.status(200).json(goal);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.get('/todo/goals', async (req, res) => {
    try {
        const goals = await Data.find({});
        res.status(200).json(goals);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.get('/todo/goals/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const goal = await Data.findById(id);
        if (!goal) {
            res.status(404).json({ message: 'Goal does not exist!' });
        }
        res.status(200).json(goal);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.delete('/todo/goals/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const goal = await Data.findByIdAndDelete(id);
        if (!goal) {
            return res.status(404).json({ message: 'Goal does not exist!' });
        }
        res.status(200).json({ message: 'Goal deleted successfully!' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.put('/todo/goals/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const goal = await Data.findByIdAndUpdate(id, req.body);
        if (!goal) {
            return res.status(404).json({ message: 'Goal does not exist!' });
        }
        const updatedGoal = await Data.findById(id);
        res.status(200).json(updatedGoal);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
