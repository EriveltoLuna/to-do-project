const express = require('express');
const Data = require('../schema/data.schema.js');
const {
    createGoal,
    getGoal,
    getGoals,
    deleteGoal,
    updateGoal,
} = require('../controller/data.controller.js');
const router = express.Router();

router.get('/', getGoals);
router.get('/:id', getGoal);
router.post('/', createGoal);
router.delete('/:id', deleteGoal);
router.put('/:id', updateGoal);

module.exports = router;
