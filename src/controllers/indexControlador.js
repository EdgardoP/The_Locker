var LocalStorage = require('node-localstorage').LocalStorage;
localStorage = new LocalStorage('/TheLocker');

const controller = {}

controller.paginaPrincipal = (req, res) => {
    res.render('index');
}

module.exports = controller;