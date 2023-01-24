const express = require('express');
const userRouter = require('./user.router');
const registerRouter = require('./register.router');
const productsRouter = require('./products.router');

const router = express.Router();

router.use('/login', userRouter);

router.use('/register', registerRouter);

router.use('/customer/products', productsRouter);

module.exports = router;