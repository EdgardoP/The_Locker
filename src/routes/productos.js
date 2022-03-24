const express = require('express');
const router = express.Router();
const productoControlador = require('../controllers/productoControlador');

router.post('/guardar', productoControlador.guardarProducto);
router.get('/listar', productoControlador.listarProductos);
router.put('/actualizar', productoControlador.actualizarProducto);
router.delete('/eliminar', productoControlador.eliminarProducto);
router.get('/catalogo/:id', productoControlador.mostrarCatalogoClientes);

module.exports = router;