const express = require('express');
const { salesController } = require('../../controllers');
const roleMiddleware = require('../../middlewares/role.middleware');
const tokenMiddleware = require('../../middlewares/token.middleware');

const router = express.Router();

router.use(tokenMiddleware);
router.use(roleMiddleware);
router.get('/orders/:id', salesController.findById);
router.get('/orders', salesController.findOrdersBySeller);

module.exports = router;