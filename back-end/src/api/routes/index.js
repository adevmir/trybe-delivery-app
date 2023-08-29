const express = require('express');
const userRouter = require('./user.router');
const registerRouter = require('./register.router');
const productsRouter = require('./products.router');
const customerRouter = require('./customer.router');
const sellerRouter = require('./seller.router');
const adminRouter = require('./admin.router');

const router = express.Router();

router.use('/login', userRouter);

router.use('/register', registerRouter);

router.use('/customer/products', productsRouter);

router.use('/customer', customerRouter);

router.use('/seller', sellerRouter);

router.use('/admin/manage', adminRouter);

module.exports = router;