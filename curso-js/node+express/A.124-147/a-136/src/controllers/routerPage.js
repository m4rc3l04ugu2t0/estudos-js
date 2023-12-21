exports.houterHome = (req, res) => {
  res.render('home');
};

exports.managePost = (req, res) => {
  console.log(req.body);
  res.send('opaaaaaa');
};
