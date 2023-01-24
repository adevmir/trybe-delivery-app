const express = require('express');
const { salesController } = require('../../controllers');
const tokenMiddleware = require('../../middlewares/token.middleware');

const router = express.Router();

router.post('/checkout', tokenMiddleware, salesController.createSale);
router.get('/orders/:id', salesController.findById);

module.exports = router;