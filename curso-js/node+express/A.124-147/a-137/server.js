const express = require('express');
const app = express();
const path = require('path');
const routes = require('./router');
const middleGlobal = require('./src/middlewares/middleware');

app.use(express.urlencoded({ extended: true }));

// Configurar o middleware express.static para servir arquivos estáticos
app.use(
  '/public',
  express.static(path.resolve(__dirname, 'public'), {
    'Content-Type': 'application/javascript',
  })
);

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(middleGlobal);
app.use(routes);

app.listen(3003, () => {
  console.log('Servidor rodando na porta 3003');
});
