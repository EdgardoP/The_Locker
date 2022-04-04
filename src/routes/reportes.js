const express = require('express');
const router = express.Router();
const reportesControlador = require('../controllers/reportesControlador');

router.get('/ventasMes', reportesControlador.ventasMensuales);
module.exports = router;