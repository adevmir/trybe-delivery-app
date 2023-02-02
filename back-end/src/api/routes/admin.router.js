const express = require('express');
const { userController } = require('../../controllers');
const roleMiddleware = require('../../middlewares/role.middleware');
const tokenMiddleware = require('../../middlewares/token.middleware');

const router = express.Router();

router.use(tokenMiddleware);
router.use(roleMiddleware);
router.get('/', userController.findUsersByAdmin);

module.exports = router;