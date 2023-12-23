const homeModel = require('../models/HomeModel');

homeModel
  .create({
    title: 'aeeeeeeeeeeee',
    description: 'foi kkkkk',
  })
  .then((response) => {
    console.log(response);
  })
  .catch((e) => {
    console.log('aaaaaaaaaaaaaaaaa');
  });

exports.houterHome = (req, res, next) => {
  res.render('home');
  next();
};

exports.managePost = (req, res, next) => {
  console.log(req.body);
  res.send('opaaaaaa');
  next();
};
