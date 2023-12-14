const express = require('express');
const app = express();

app.get('/', (request, response) => {
  response.send('hello word');
});

app.listen(301);
