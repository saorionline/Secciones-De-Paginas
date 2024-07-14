const faker = require('faker');
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola mi server es Express');
})

app.get('/products', (req, res) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 10; 
  for (let index = 0; index < 10; index++){
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(min,max),10),
      image: faker.image.imageUrl(width,height),
    });
  }
  res.json(products);
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

app.get('/users', (req, res) => {
  const { limit, offset } = req.query;
  if ( limit && offset ) {
    res.json({
      limit, 
      offset
    });
  } else {
  res.send('No params here');
  }
})

app.get('/categories/:categoryId/questions/:questionId', (req,res) => {
  const { categoryId, questionId } = req.params;
  res.json

})

app.listen(port, () => {
  console.log('Mi port' +  port);
});