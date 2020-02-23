const express = require('express');

const Products = require('../models/products');
const products = new Products;
const { listAll, listOne, updateItems, createItems, deleteItems } = require('./generalRouter');
const router = express.Router();


router.get('/products', listAll(products));
router.get('/products/:id', listOne(products));
router.put('/products/:id', updateItems(products));
router.post('/products', createItems(products));
router.delete('/products/:id', deleteItems(products));


module.exports = router;