function handle404error(req, res, next) {
  res.status(404).send('Something went wrong');
  next();
}

module.exports = handle404error;
