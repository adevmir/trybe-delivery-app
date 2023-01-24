const express = require('express');
const { userController } = require('../../controllers');
const validateJWT = require('../../auth/validateJWT')

const router = express.Router();

router.post('/', userController.registerUser);
router.post('/admin', validateJWT, userController.adminRegister);

module.exports = router;