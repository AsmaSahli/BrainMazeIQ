const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({

    testId: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    options: {
        type: Array,
        default: [],
    },
    correctOption: {
        type: String,
        required: true,
    },


}, { timestamps: true });



const Question = mongoose.model("Question", QuestionSchema);

module.exports = Question;
