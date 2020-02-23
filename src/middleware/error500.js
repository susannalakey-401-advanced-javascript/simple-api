const handle500error = (err, req, res, next) => {
  res.status(500).send('Something went wrong');

};


module.exports = handle500error;