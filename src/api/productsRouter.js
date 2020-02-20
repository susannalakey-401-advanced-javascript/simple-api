const express = require('express');


const Products = require('../models/products')
const products = new Products;

const router = express.Router();


router.get('/products', listAllProducts);
router.get('/products/:id', listOneProduct);
router.put('/products/:id', updateProducts);
router.post('/products', createProducts);
router.delete('/products/:id', deleteProducts);


async function listAllProducts(req, res, next) {
  const allProducts = await products.read();
  res.status(200).json(allProducts);
}


async function listOneProduct(req, res, next) {

  const readProducts = await products.read(req.params.id);
  if (readProducts.length === 0) {
    res.status(404);
  } else {
    res.status(200).json(readProducts[0]);
  }
}


async function updateProducts(req, res, next) {
  const updated = await products.update(req.params.id, req.body);
  res.status(200).json(updated);
}

async function createProducts(req, res, next) {
  const created = await products.create(req.body);
  res.status(201).json(created);
}

async function deleteProducts(req, res, next) {
  const deleted = await products.delete(req.params.id);
  res.status(204).json(deleted);
}

module.exports = router;