const express = require('express');
const router = express.Router();

const productsController = require('../controller/products');

router.post('/', productsController.createProduct);
router.get('/', productsController.getAllProducts);
// router.get('/:idProduct', productsController.detailProduct);
router.delete('/:idProduct', productsController.deleteProduct);
router.patch('/:idProduct', productsController.editProduct);
router.get('/:category', productsController.getByCategory);

module.exports = router;