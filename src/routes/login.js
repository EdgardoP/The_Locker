const express = require('express');
const router = express.Router();
const loginControlador = require('../controllers/loginControlador');

router.get('/', loginControlador.paginaLogin);
router.post('/verificarUsuario', loginControlador.verificarLogin);

module.exports = router;