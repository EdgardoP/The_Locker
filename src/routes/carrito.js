const express = require('express');
const router = express.Router();
const carritoControlador = require('../controllers/carritoControlador');

router.get('/listar', carritoControlador.listarCarrito);
router.post('/aggCarrito/:id', carritoControlador.aggCarrito);
router.get('/lista-de-compras', carritoControlador.carritoPersonal);
router.post(`/ejecutarPago/:id`, carritoControlador.pagarCarrito);
module.exports = router;