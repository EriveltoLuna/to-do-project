const mongoose = require('mongoose');

const DataSchema = mongoose.Schema(
    {
        goal: {
            type: String,
            required: [true, 'Please enter your goal!'],
        },

        finished: {
            type: Boolean,
            default: false,
            required: true,
        },

        archived: {
            type: Boolean,
            default: false,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Data = mongoose.model('DataSchema', DataSchema);

module.exports = Data;
