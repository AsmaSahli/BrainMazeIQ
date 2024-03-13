const Test = require("../models/Test");
const e = require("../utils/error");
module.exports = {
        addTest: async (req, res, next) => {
            try {
            const { testName, testDuration, totalMarks ,passingMarks } = req.body;
        
            // if (!req.user.isAdmin) {
            //     return next(e.errorHandler(403, 'You are not allowed to create a Test'));
            // }
            if (!req.body.testName|| !req.body.testDuration || !req.body.totalMarks || !req.body.passingMarks) {
                return next(e.errorHandler(400, 'Please provide all required fields'));
            }
        
            const newTest = new Test({
                testName,
                testDuration,
                totalMarks,
                passingMarks

            });
            await newTest.save();
        
            res.status(200).json(newTest);
            } catch (error) {
            next(error);
            }
        },
        getAllTests: async (req, res, next) => {
            try {
                const tests = await Test.find();
                res.status(200).json(tests);
            } catch (error) {
                next(error);
            }
        },
        getOneTest: async (req, res, next) => {
            try {
                const { testId } = req.params;
                const test = await Test.findById(testId);
                if (!test) {
                    return next(
                        e.errorHandler(404, 'Test not found')
                    );
                }
                res.status(200).json(test);
            } catch (error) {
                next(error);
            }
        },

        deletetest : async (req, res, next) => {
            // if (!req.user.isAdmin || req.user.id !== req.params.userId) {
            //     return next(e.errorHandler(403, 'You are not allowed to delete this test'));
            //     }
                try {
                await Test.findByIdAndDelete(req.params.testId);
                res.status(200).json('The test has been deleted');
                } catch (error) {
                next(error);
                }
            },

        updatetest :async (req, res, next) => {
            // if (!req.user.isAdmin || req.user.id !== req.params.userId) {
            //     return next(e.errorHandler(403, 'You are not allowed to update this test'));
            //     }
                try {
                const updatedTest = await Test.findByIdAndUpdate(
                    req.params.testId,
                    {
                    $set: {
                        testName: req.body.testName,
                        testDuration: req.body.testDuration,
                        totalMarks: req.body.totalMarks,
                        passingMarks: req.body.passingMarks,
                    },
                    },
                    { new: true }
                );
                res.status(200).json(updatedTest);
                } catch (error) {
                next(error);
                }

            },

}