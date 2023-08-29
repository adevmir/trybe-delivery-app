const express = require('express');
const { salesController } = require('../../controllers');
const tokenMiddleware = require('../../middlewares/token.middleware');

const router = express.Router();

router.use(tokenMiddleware);
router.post('/checkout', salesController.createSale);
router.get('/orders/:id', salesController.findById);
router.get('/orders', salesController.findOrdersByCustomer);
router.patch('/orders/:id', salesController.updateOrder);

module.exports = router;