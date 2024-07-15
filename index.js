const express = require('express');
const routerApi = require('./routes');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Home');
  });
 app.get('/new-route', (req, res) => {
  res.send('Page 1');
 }); 

 routerApi(app);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});