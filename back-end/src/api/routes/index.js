const express = require('express');
const userRouter = require('./user.router');

const router = express.Router();

router.use('/login', userRouter);

module.exports = router;