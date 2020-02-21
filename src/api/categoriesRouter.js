const express = require('express');


const Categories = require('../models/categories');
const categories = new Categories;

const router = express.Router();

const { listAll, listOne, updateItems, createItems, deleteItems } = require('./generalRouter');

router.get('/categories', listAll(categories));
router.get('/categories/:id', listOne(categories));
router.put('/categories/:id', updateItems(categories));
router.post('/categories', createItems(categories));
router.delete('/categories/:id', deleteItems(categories));


module.exports = router;