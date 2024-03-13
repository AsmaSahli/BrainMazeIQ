const mongoose = require("mongoose");

const TestSchema = new mongoose.Schema({

    testName:{
        type: String,
        required: true,
    },
    testDuration:{
        type: Number,
        required: true,
    },
    totalMarks:{
        type: Number,
        required: true,
    },
    passingMarks:{
        type: Number,
        required: true,
    },
    
    questions:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question',
    }]


}, { timestamps: true });



const Test = mongoose.model("Test", TestSchema);

module.exports = Test;
