const express = require('express');
const app = express();
const mongoose = require('mongoose');
const connectString =
  'mongodb+srv://probut07:A2k4CBlqIBJMELXb@cluster0.xqw5uio.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(connectString).then(() => {
  console.log('foi kkkkk');
  app.emit('okay');
});

// , {
//   useNewUrlParser: true,
//   useUinifiedTopology: true,
// }

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

app.on('okay', () => {
  app.listen(3003, () => {
    console.log('Servidor rodando na porta 3003');
  });
});

// mGU2kEq085RVsOgd;
// mongodb+srv://marcelo014:<password>@cluster0.90iae2x.mongodb.net/?retryWrites=true&w=majority
