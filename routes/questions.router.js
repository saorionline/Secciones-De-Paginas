const express = require('express');
const router = express.Router();

const questions_library = [
{id: 1, title: 'Health and Wellness', text:"Physical and Mental Well-being", completed: true},
{id: 2, title: 'Popular Health', text:"Weight Loss", completed: false},
{id: 3, title: 'Nutrition', text:"Healthy eating habits, meal plans, and recipes", completed: false},
{id: 4, title: 'Physical Exercise', text:"Types, workout routines, and fitness tips", completed: false},
{id: 5, title: 'Mental Health', text:"Managing stress, and improving mental well-being", completed: false},
{id: 6, title: 'Sleep Well', text:"Improve sleep habits", completed: false}]

router.get('/questions/:id',(req, res) => {
  const { id } = req.params;
  const question = questions_library.find(question => question.id === parseInt(id));
  if(!question){
   return res.status(404).json({ message: 'Question not found'});
  }
  res.json(question);
});

module.exports = router;
