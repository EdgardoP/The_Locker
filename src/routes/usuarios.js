const express = require('express');
const router = express.Router();
const usuarioControlador = require('../controllers/usuarioControlador');

router.get('/mostrar', usuarioControlador.mostrar)
router.post('/guardar', usuarioControlador.guardar);
router.put('/actualizar', usuarioControlador.actualizar);
router.delete('/eliminar/', usuarioControlador.eliminar)
module.exports = router;