const express = require('express');
const productController = require('../controllers/clientesController');

const router = express.Router();

router.get('/products', clientController.getProduct);
router.post('/products', clientController.createProduct);
router.put('/products/:id', clientController.updateProduct);
router.delete('/products/:id', clientController.deleteProduct);

module.exports = router;