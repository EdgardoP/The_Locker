const express = require('express');
const router = express.Router();
const indexControlador = require('../controllers/indexControlador');

router.get('/index', indexControlador.paginaPrincipal);
router.get('/dashboard', indexControlador.menuEmpleados);
module.exports = router;