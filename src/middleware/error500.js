function handle500error(err, req, res, next) {
  res.status(500).json({ error: err.message });
}


module.exports = handle500error;