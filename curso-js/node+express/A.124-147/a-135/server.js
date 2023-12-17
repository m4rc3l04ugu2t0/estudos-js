const express = require('express');
const app = express();
const path = require('path');
const routes = require('../a-134/src/router');

app.use(
  express.static(
    '/home/m4rc2l0/dev/estudos-js/curso-js/node+express/A.124-147/a-135/public'
  )
);

app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.set(
  'views',
  path.resolve(
    '/home/m4rc2l0/dev/estudos-js/curso-js/node+express/A.124-147/a-135/src/views'
  )
);
app.set('view engine', 'ejs');

app.listen(3500, () => {
  console.log('http://localhost:3500');
});
