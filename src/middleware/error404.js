function handle404error(err, req, res, next) {
  res.status(404).json({
    err: 'There\'s nothing here!',
  });
}

module.exports = handle404error;