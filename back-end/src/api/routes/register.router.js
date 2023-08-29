const express = require('express');
const { userController } = require('../../controllers');
const tokenMiddleware = require('../../middlewares/token.middleware');

const router = express.Router();

router.post('/', userController.registerUser);
router.use(tokenMiddleware);
router.post('/admin', userController.adminRegister);

module.exports = router;
