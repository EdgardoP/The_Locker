const express = require('express');
const router = express.Router();
const indexControlador = require('../controllers/indexControlador');

router.get('/index', indexControlador.paginaPrincipal);
module.exports = router;