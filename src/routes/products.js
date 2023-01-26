const express = require('express');
const router = express.Router();

const productsController = require('../controller/products');

router.post('/', productsController.createProduct);
router.get('/', productsController.getAllProducts);
router.delete('/:idProduct', productsController.deleteProduct);

module.exports = router;