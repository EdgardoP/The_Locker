var LocalStorage = require('node-localstorage').LocalStorage;
localStorage = new LocalStorage('/TheLocker');

const controller = {}

controller.ventasMensuales = (req, res) => {
    res.render('reporteVentasMes');
}

module.exports = controller;