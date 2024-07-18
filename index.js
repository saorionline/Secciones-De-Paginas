const express = require('express');
const routerApi = require('./routes');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const Hero = require('./src/react-components/Hero.tsx'); // Replace with your component path

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const reactComponent = ReactDOMServer.renderToString(< Hero/>);
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>My Express App by Sao</title>
    </head>
    <body>
      <div id="root">${reactComponent}</div>
      <script src="/public/client-side-react-bundle.js"></script> // Replace with actual path src="path/to/your/client-side-react-bundle.js"
    </body>
    </html>
  `);
  });

app.get('/new-route', (req, res) => {
  res.send('Page 1');
 }); 

routerApi(app);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});