const resultController = require("../controllers/ResultController");


module.exports = (app) => {
    ;
        app.post('/createResult',resultController.createResult)
        app.get('/getResults', resultController.getAllResults);
        app.get('/getUserResults/:userId', resultController.getUserResults);
        app.get('/getOneResult/:userId/:testId',resultController.getOneResult);
        app.patch('/updateResult/:userId/:testId',resultController.updateresult);
}