const express = require('express');
const path = require('path'); // Required for path manipulation

const React = require('react');
const ReactDOMServer = require('react-dom/server');
const Hero = require('./src/react-components/Hero.tsx'); // Replace with your path

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public'))); // Serve static assets from public
  
// SSR logic for the root route
app.get('/', (req, res) => {
  // Render the Hero component on the server-side
  const reactComponent = ReactDOMServer.renderToString(<Hero />);

  // Build the HTML content with the pre-rendered component
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>My Express App by Sao</title>
    </head>
    <body>
      <div id="app">${reactComponent}</div>
      <script src="/public/client-side-react-bundle.js"></script>  </body>
    </html>
  `;

  // Send the HTML content as the response
  res.send(htmlContent);
});


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});