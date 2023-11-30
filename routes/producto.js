const express = require('express');
const productController = require('../controllers/clientesController');

const router = express.Router();

router.get('/products', productController.getProduct);
router.post('/products', productController.createProduct);
router.put('/products/:id', productController.updateProduct);
router.delete('/products/:id', productController.deleteProduct);

module.exports = router;