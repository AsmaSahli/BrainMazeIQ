
const testController = require("../controllers/TestController");
const verifyToken =require("../utils/verifyUser")

module.exports = (app) => {
    ;
        app.post("/createTest" ,testController.addTest);
        app.get('/getTests', testController.getAllTests);
        app.get('/getOneTest/:testId',testController.getOneTest);
        app.delete('/deleteTest/:testId',testController.deletetest);
        app.patch('/updateTest/:testId',testController.updatetest);

    };