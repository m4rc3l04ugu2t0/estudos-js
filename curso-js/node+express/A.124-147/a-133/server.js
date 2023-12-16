const express = require('express');
const app = express();

app.get('/', (request, response) => {
  response.send('hello');
});

app.listen(3000, (req, res) => {
  console.log('http://localhost:3000');
});
