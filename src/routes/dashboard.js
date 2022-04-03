const express = require('express');
const router = express.Router();
const dashboardControlador = require('../controllers/dashboardControlador');

router.get('/', dashboardControlador.menuEmpleados);
router.get('/controlUsuarios', dashboardControlador.controlUsuarios);
router.get('/controlInventario', dashboardControlador.controlInventario);
router.get('/controlVentas', dashboardControlador.controlVentas);
router.get('/controlCatalogo', dashboardControlador.controlCatalogo);
router.get('/Bitacora', dashboardControlador.controlBitacora);
module.exports = router;