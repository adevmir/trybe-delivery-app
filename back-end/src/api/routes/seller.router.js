const express = require('express');
const { salesController } = require('../../controllers');
const tokenMiddleware = require('../../middlewares/token.middleware');

const router = express.Router();

router.use(tokenMiddleware);
router.get('/orders', salesController.findOrdersBySeller);

module.exports = router;