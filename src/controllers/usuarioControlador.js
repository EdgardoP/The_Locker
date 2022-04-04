var LocalStorage = require('node-localstorage').LocalStorage;
localStorage = new LocalStorage('/TheLocker');
const controller = {};

const bitacora = "INSERT INTO bitacora ( " +
    "accionRealizada, " +
    "moduloAfectado, " +
    "fechaBitacora, " +
    "fkEmailUsuario) " +
    "VALUES ";
const modulo = 'Usuario'
let date = new Date();
let fecha = date.toISOString().split('T')[0];

controller.mostrar = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM the_locker.usuario;', (err, usuarios) => {
            res.send(usuarios)
        })
    })
}

controller.guardarCliente = (req, res) => {

    const data = req.body;
    console.log(data);
    const idTipo = {
        idUsuario: Math.floor(Math.random() * (5000 - 1) + 1),
        tipoUsuario: 3
    }
    const agg = Object.assign(data, idTipo)
    const { nombreUsuario, apellidoUsuario, edadUsuario, sexoUsuario, emailUsuario, contrasenia } = req.body;
    if (!nombreUsuario || !apellidoUsuario || !edadUsuario || !sexoUsuario || !emailUsuario || !contrasenia) {
        res.send('Debes ingresar todos los datos');
    } else {
        req.getConnection((err, conn) => {
            conn.query('INSERT INTO usuario set ?', [agg], (err, usuario) => {
                if (usuario) {
                    res.redirect('/thelocker/login');
                } else {
                    console.log(err);
                    res.send('Ocurrio un error al ingresar los datos.')
                }
            })
        })
    }
}
controller.guardar = (req, res) => {
    const data = req.body;
    console.log(req.body);
    const { idUsuario, nombreUsuario, apellidoUsuario, edadUsuario, sexoUsuario, emailUsuario, contrasenia, tipoUsuario } = req.body;
    if (!idUsuario || !nombreUsuario || !apellidoUsuario || !edadUsuario || !sexoUsuario || !emailUsuario || !contrasenia || !tipoUsuario) {
        res.send('Debes ingresar todos los datos');
    } else {
        req.getConnection((err, conn) => {
            conn.query('INSERT INTO usuario set ?', [data], (err, usuario) => {
                if (usuario) {
                    res.redirect('/thelocker/dashboard/controlUsuarios');
                } else {
                    console.log(err);
                    res.send("Ocurrio un error al ingresar los datos")
                }
            })
        })
        req.getConnection((err, conn) => {
            conn.query(`${bitacora} ('Guardar','${modulo}','${fecha}','${localStorage.getItem('correoUsuario')}')`, (err, usuario) => {
                if (usuario) {
                    console.log('Se guardo la bitacora')
                } else {
                    console.log(err);
                    console.log('Error al guardar la bitacora');
                }
            })
        })
    }
}


controller.actualizar = (req, res) => {
    const data = req.body;
    console.log(data);
    const { emailUsuario } = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE usuario set ? WHERE emailUsuario = ? ', [data, emailUsuario], (err, usuario) => {
            if (usuario) {
                res.redirect('/thelocker/dashboard/controlUsuarios');
            } else {
                res.send("Ocurrio un error al tratar de actualizar")
                console.log(err);
            }
        })
    })
    req.getConnection((err, conn) => {
        conn.query(`${bitacora} ('Actualizar','${modulo}','${fecha}','${localStorage.getItem('correoUsuario')}')`, (err, usuario) => {
            if (usuario) {
                console.log('Se guardo la bitacora')
            } else {
                console.log(err);
                console.log('Error al guardar la bitacora');
            }
        })
    })

}

controller.eliminar = (req, res) => {
    const { emailUsuario } = req.body;
    console.log(emailUsuario);
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM usuario WHERE emailUsuario = ?', [emailUsuario], (err, usuario) => {
            if (usuario) {
                res.redirect('/thelocker/dashboard/controlUsuarios');
            } else {
                console.log(err);
                res.send('Ocurrio un error');
            }
        })
    })
    req.getConnection((err, conn) => {
        conn.query(`${bitacora} ('Eliminar','${modulo}','${fecha}','${localStorage.getItem('correoUsuario')}')`, (err, usuario) => {
            if (usuario) {
                console.log('Se guardo la bitacora')
            } else {
                console.log(err);
                console.log('Error al guardar la bitacora');
            }
        })
    })
}

module.exports = controller;