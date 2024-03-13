const mongoose = require("mongoose");

const ResultSchema = new mongoose.Schema({

    testId: {
        type: String,
        required: true,
    },
    testName: {
        type: String,

    },
    userId: {
        type: String,
        required: true,
    },
    points: {
        type: Number,
    },
    answers: {
        type: Array,
        default: [],
    },
    resultStatus: {
        type: String,
        required: true,
        default:'Fail'
    },


}, { timestamps: true });



const Result = mongoose.model("Result", ResultSchema);

module.exports = Result;
