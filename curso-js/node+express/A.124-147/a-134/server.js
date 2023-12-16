const express = require('express');
const app = express();
const path = require('path');

const routes = require('./src/router');

app.use(express.urlencoded({ extended: true }));
app.use(routes);

console.log('se');

app.set(
  'views',
  path.resolve(
    '/home/m4rc2l0/dev/estudos-js/curso-js/node+express/A.124-147/a-134/src/views'
  )
);
app.set('views engine', 'ejs');

app.listen(3000, () => {
  console.log('http://localhost:3000');
});
