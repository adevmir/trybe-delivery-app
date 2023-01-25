const express = require('express');
const userRouter = require('./user.router');
const registerRouter = require('./register.router');
const productsRouter = require('./products.router');
const salesRouter = require('./sales.router');

const router = express.Router();

router.use('/login', userRouter);

router.use('/register', registerRouter);

router.use('/customer/products', productsRouter);
router.use('/customer', salesRouter);

module.exports = router;