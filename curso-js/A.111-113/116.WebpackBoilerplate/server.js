const express = require('express');
const app = express();
const path = require('path');
const routes = require('./router');

app.use(express.static(path(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.set('views', path(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.listen(3000, () => {
  console.log('http://localhost:3000');
});
