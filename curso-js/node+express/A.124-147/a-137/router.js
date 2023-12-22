const express = require('express');
const router = express.Router();

const controllerHome = require('./src/controllers/routerPage');

const middlewere = (req, res, next) => {
  console.log('hmmmmmmmmmm');
  next();
};

router.get('/', middlewere, controllerHome.houterHome);

router.post('/', controllerHome.managePost);

router.get('/contact/:id?/:param?', (req, res) => {
  console.log(req.query, 'query');
  console.log(req.params);
  res.send('contact');
});

module.exports = router;
