const express = require('express');
const { userController } = require('../../controllers');
const tokenMiddleware = require('../../middlewares/token.middleware');

const router = express.Router();

router.post('/', userController.registerUser);
router.post('/admin', tokenMiddleware, userController.adminRegister);

module.exports = router;
