const express = require('express');
const questionsRouter = require('./routes/questions.router.js');

const app = express();
const port = 3000;

app.use('/preguntas', questionsRouter);
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});