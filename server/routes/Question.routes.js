const questionController = require("../controllers/QuestionController");
const verifyToken =require("../utils/verifyUser")

module.exports = (app) => {
    ;
        app.post("/createQuestion",questionController.addQuestion);
        app.get('/getQuestions/:testId', questionController.getAllQuestions);
        app.get('/getOneQuestion/:questionId',questionController.getOneQuestion);
        app.delete('/deleteQuestion/:questionId',questionController.deletequestion);
        app.patch('/updateQuestion/:questionId',questionController.updatequestion);

    };