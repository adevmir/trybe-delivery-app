const express = require('express');
const { userController } = require('../../controllers');
const loginMiddleware = require('../../middlewares/login.middleware');

const router = express.Router();

router.post('/', loginMiddleware, userController.login);

module.exports = router;