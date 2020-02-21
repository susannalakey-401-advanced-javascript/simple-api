const express = require('express');
const handle404error = require('../middleware/error404.js');

const Products = require('../models/products');
const products = new Products;
const { listAll, listOne, updateItems, createItems, deleteItems } = require('./generalRouter');
const router = express.Router();


router.get('/products', listAll(products));
router.get('/products/:id', listOne(products));
router.put('/products/:id', updateItems(products));
router.post('/products', createItems(products));
router.delete('/products/:id', deleteItems(products));


// async function listAllProducts(req, res, next) {
//   const allProducts = await products.read();
//   res.status(200).json({
//     count: allProducts.lenght,
//     result: allProducts,
//   });
// }


// async function listOneProduct(req, res, next) {

//   const readProducts = await products.read(req.params.id);
//   if (readProducts.length === 0) {
//     handle404error();
//   } else {
//     res.status(200).json(readProducts[0]);
//   }
// }


// async function updateProducts(req, res, next) {
//   const updated = await products.update(req.params.id, req.body);
//   res.status(200).json(updated);
// }

// async function createProducts(req, res, next) {
//   const created = await products.create(req.body);
//   res.status(201).json(created);
// }

// async function deleteProducts(req, res, next) {
//   const deleted = await products.delete(req.params.id);
//   res.status(204).json(deleted);
// }

module.exports = router;