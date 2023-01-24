const express = require('express');
const userRouter = require('./user.router');
const productsRouter = require('./products.router');

const router = express.Router();

router.use('/login', userRouter);
router.use('/customer/products', productsRouter);

module.exports = router;