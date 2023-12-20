const express = require('express');
const app = express();
const routes = require('./router');

app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(3003, () => {
  console.log('http://localhost:3003');
});
