const express = require('express');
const userRouter = require('./user.router');
const registerRouter = require('./register.router');

const router = express.Router();

router.use('/login', userRouter);
router.use('/register', registerRouter);

module.exports = router;