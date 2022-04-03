const express = require('express');
const router = express.Router();
const usuarioControlador = require('../controllers/usuarioControlador');

router.get('/mostrar', usuarioControlador.mostrar)
router.post('/guardar', usuarioControlador.guardar);
router.post('/guardarCliente', usuarioControlador.guardarCliente);
router.post('/actualizar', usuarioControlador.actualizar);
router.post('/eliminar/', usuarioControlador.eliminar);

module.exports = router;