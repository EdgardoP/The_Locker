const express = require('express');
const router = express.Router();
const dashboardControlador = require('../controllers/dashboardControlador');

router.get('/', dashboardControlador.menuEmpleados);
router.get('/controlUsuarios', dashboardControlador.controlUsuarios);

module.exports = router;