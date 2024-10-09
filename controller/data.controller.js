const Data = require('../schema/data.schema.js');

const createGoal = async (req, res) => {
    try {
        const goal = await Data.create(req.body);
        res.status(200).json(goal);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getGoals = async (req, res) => {
    try {
        const goals = await Data.find({});
        res.status(200).json(goals);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getGoal = async (req, res) => {
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
};

const deleteGoal = async (req, res) => {
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
};

const updateGoal = async (req, res) => {
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
};

module.exports = {
    createGoal,
    getGoal,
    getGoals,
    deleteGoal,
    updateGoal,
};
