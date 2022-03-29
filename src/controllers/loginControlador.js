const controller = {}
var LocalStorage = require('node-localstorage').LocalStorage;
localStorage = new LocalStorage('/TheLocker');


controller.paginaLogin = (req, res) => {
    res.render('login')
}

controller.verificarLogin = (req, res) => {
    const { emailUsuario } = req.body;
    const { password } = req.body;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM the_locker.usuario where emailUsuario = ? and password = ? ', [emailUsuario, password], (err, usuario) => {
            if (usuario.length === 0) {
                res.send('No es encontro este usuario')
            } else {
                if (typeof localStorage === "undefined" || localStorage === null) {
                    var LocalStorage = require('node-localstorage').LocalStorage;
                    localStorage = new LocalStorage('/TheLocker');
                }
                localStorage.setItem('correoUsuario', usuario[0].emailUsuario)
                localStorage.setItem('nombreUsuario', usuario[0].nombreUsuario)
                if (usuario[0].tipoUsuario === 3) {
                    res.redirect('/thelocker/index')
                } else if (usuario[0].tipoUsuario === 1) {
                    res.redirect('/thelocker/dashboard')
                }
            }
        })
    })
}

controller.cerrarSesion = (req, res) => {
    localStorage.clear();
    res.redirect('/thelocker/login/')
}

module.exports = controller;