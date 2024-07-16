const SurveyService = require('./../services/questions.service');
const express = require('express');
const router = express.Router();

const service = new SurveyService();

router.get('/', async(req, res) => {
  const questions = await service.find();
  res.json(questions);
});

router.get('/filter',(req,res)=>{
  res.send('Filter Test');
});

router.get('/:id', async(req, res) => {
  const { id } = req.params;
  const question = await service.findOne(id);
  res.json( question );
});

router.delete('/:id', async(req, res) => {
  const { id } = req.params;
  const rta = await service.detele(id);
  res.json (rta );
});

module.exports = router;
