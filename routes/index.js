const questionsRouter = require('./questions.router');

function routerApi(app) {
    app.use('/questions', questionsRouter)
}

module.exports = routerApi;