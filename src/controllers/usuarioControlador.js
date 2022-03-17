const controller = {};

controller.mostrar = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM the_locker.usuario;', (err, usuarios) => {
            res.send(usuarios)
        })
    })
}

controller.guardar = (req, res) => {
    const data = req.body;
    console.log(req.body);
    const { idUsuario, nombreUsuario, apellidoUsuario, edadUsuario, sexoUsuario, emailUsuario, password, tipoUsuario } = req.body;
    if (!idUsuario || !nombreUsuario || !apellidoUsuario || !edadUsuario || !sexoUsuario || !emailUsuario || !password || !tipoUsuario) {
        res.send('Datos ingresar todos los datos');
    } else {
        req.getConnection((err, conn) => {
            conn.query('INSERT INTO usuario set ?', [data], (err, usuario) => {
                if (usuario) {
                    res.send('Datos ingresados correctamente');
                } else {
                    console.log(err);
                    res.send("Ocurrio un error al ingresar los datos")
                }
            })
        })
    }
}


controller.actualizar = (req, res) => {
    const data = req.body;
    const { idUsuario } = req.body;
    console.log(idUsuario);
    req.getConnection((err, conn) => {
        conn.query('UPDATE usuario set ? WHERE idUsuario = ? ', [data, idUsuario], (err, usuario) => {
            if (usuario) {
                res.send('Cambios realizados exitosamente');
            } else {
                res.send("Ocurrio un error al tratar de actualizar")
                console.log(err);
            }
        })
    })

}

controller.eliminar = (req, res) => {
    const { idUsuario } = req.body;
    console.log(idUsuario);
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM usuario WHERE idUsuario = ?', [idUsuario], (err, usuario) => {
            res.send('Cambios realizados exitosamente');
        })
    })
}
module.exports = controller;