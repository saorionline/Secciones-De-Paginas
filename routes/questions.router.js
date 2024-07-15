const QuestionService = require('./../services/question.service');
const express = require('express');
const router = express.Router();

const service = new QuestionService();

router.get('/', (req, res) => {
  const questions = service.find();
  res.json(questions);
});

router.get('/:id',(req, res) => {
  const { id } = req.params;
  const questionService = new QuestionService();
  const question = questionService.findOne(id);
  res.json( question );
});

router.delete('/:id', async(req, res) => {
  const { id } = req.params;
  const rta = await questionService.detele(id);
  res.json (rta );
});

module.exports = router;
