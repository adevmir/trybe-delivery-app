const express = require('express');
const userRouter = require('./user.router');
const registerRouter = require('./register.router');
const productsRouter = require('./products.router');
const customerRouter = require('./customer.router');
const sellerRouter = require('./seller.router');

const router = express.Router();

router.use('/login', userRouter);

router.use('/register', registerRouter);

router.use('/customer/products', productsRouter);

router.use('/customer', customerRouter);

router.use('/seller', sellerRouter);

module.exports = router;