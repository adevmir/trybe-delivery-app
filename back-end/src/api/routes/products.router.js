const express = require('express');
const { productsController } = require('../../controllers');
const tokenMiddleware = require('../../middlewares/token.middleware');

const router = express.Router();

// acrescentado a validação no middleware de token para a rota de produtos que deslogará o user caso o token seja inválido.
router.get('/', tokenMiddleware, productsController.getAll);

module.exports = router;