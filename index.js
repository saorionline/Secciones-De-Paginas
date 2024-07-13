const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola mi server es Express');
})

app.get('/questions',(req, res) => {
  console.log('Mis Preguntas')
  res.json([{
    title: 'Health Detector',
    text: 'Physical and mental Well-being',
  },
  {
    title: 'Weight Loss',
    text: 'Diets and Plans',
  }
  ]);
});

app.get('/questions/:id', (req, res) => {
  const {id} = req.params;
  res.json({
    id,
    title: 'Diet and Plans',
    text: 'Weight Loss'
  });
})

app.get('/categories/:categoryId/questions/:questionId', (req,res) => {
  const { categoryId, questionId } = req.params;
  res.json

})

app.listen(port, () => {
  console.log('Mi port' +  port);
});