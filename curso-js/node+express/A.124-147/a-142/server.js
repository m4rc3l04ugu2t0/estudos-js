require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const connectString = `mongodb+srv://probut07:${process.env.CONNECTIONSTRING}@cluster0.xqw5uio.mongodb.net/?retryWrites=true&w=majority`;

mongoose
  .connect(connectString)
  .then(() => {
    console.log('foi kkkkk');
    app.emit('okay');
  })
  .catch((e) => {
    console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
  });

const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');

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

const sessionOptions = session({
  secret: 'opa',
  store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }), // Corrigido aqui
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
  },
});

app.use(sessionOptions);
app.use(flash());

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
// mongodb+srv://probut07:A2k4CBlqIBJMELXb@cluster0.xqw5uio.mongodb.net/?retryWrites=true&w=majority
