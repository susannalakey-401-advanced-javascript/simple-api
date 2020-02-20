const express = require('express');
const app = express();
const productsRouter = require('./api/productsRouter.js')
// middleware
app.use(express.json());

// Routes
app.use(productsRouter);
// Error handlers



module.exports = {
  server: app,
  start: function (port) {
    app.listen(port, () => {
      console.log(`Listening to port at ${port}`);
    });
  },
};