const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola mi server es Express');
})

app.get('/questions',(req, res) => {
  console.log('Mis Preguntas')
  res.json({
    title: 'Health Detector',
    id: 1,
  });
});

app.listen(port, () => {
  console.log('Mi port' +  port);
});