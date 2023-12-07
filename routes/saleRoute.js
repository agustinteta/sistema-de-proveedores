const express = require('express');
const saleController = require('../controllers/saleController');

const router = express.Router();

router.get('/', saleController.getSales);
router.post('/', saleController.createSale);
router.put('/:id', saleController.updateSale);
router.delete('/:id', saleController.deleteSale);

module.exports = router;