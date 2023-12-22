exports.houterHome = (req, res, next) => {
  res.render('home');
  next();
};

exports.managePost = (req, res, next) => {
  console.log(req.body);
  res.send('opaaaaaa');
  next();
};
