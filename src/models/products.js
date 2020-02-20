const Model = require('./mongo-model.js');
const productsSchema = require('./products-schema.js');

class Products extends Model {
  constructor() {
    super(productsSchema);
  }
}

module.exports = Products;