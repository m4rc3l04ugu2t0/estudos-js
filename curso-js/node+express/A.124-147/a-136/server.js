const express = require('express');
const app = express();
const path = require('path');
const routers = require('./router');

app.use(
  express.static(
    '/home/m4rc3l0/dev/estudos-js/curso-js/node+express/A.124-147/a-136/public'
  )
);

app.use(express.urlencoded({ extended: true }));
app.use(routers);

app.set(
  'views',
  path.resolve(
    '/home/m4rc3l0/dev/estudos-js/curso-js/node+express/A.124-147/a-136/src/views'
  )
);

app.set('view engine', 'ejs');

app.listen(3000, () => {
  console.log('http://localhost:3000');
});
