function handle404error(req, res, next) {
  res.status(404).send('Something went wrong');
  next();
}

module.exports = handle404error;






// app.use(function(err, req, res, next) {
//   console.log('test');
//   res.status(500).send("custom error handler called");
// });

// app.use(function(req, res, next) {
//   console.log('test');
//   res.status(404).send("custom not found handler called");
// });