const express = require('express');
const router = express.Router();
const productoControlador = require('../controllers/productoControlador');

router.post('/guardar', productoControlador.guardarProducto);
router.get('/listar', productoControlador.listarProductos);
router.post('/actualizar', productoControlador.actualizarProducto);
router.post('/eliminar', productoControlador.eliminarProducto);
router.get('/catalogo/:id', productoControlador.mostrarCatalogoClientes);
router.post('/estado/:parametro', productoControlador.cambiarEstado);
module.exports = router;