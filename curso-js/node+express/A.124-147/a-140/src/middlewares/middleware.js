module.exports = (req, res, next) => {
  console.log('middle global', `ola ${req.body.name}`);

  next();
};
