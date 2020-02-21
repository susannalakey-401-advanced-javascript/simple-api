const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const productsRouter = require('./api/productsRouter.js');
const categoriesRouter = require('./api/categoriesRouter.js');

const handle404error = require('./middleware/error404.js');
const handle500error = require('./middleware/error500.js');


// middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());


// Routes
app.use(productsRouter);
app.use(categoriesRouter);

// Error handlers
app.use(handle404error);
app.use(handle500error);


module.exports = {
  server: app,
  start: function (port) {
    app.listen(port, () => {
      console.log(`Listening to port at ${port}`);
    });
  },
};