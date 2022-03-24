const controller = {}

controller.guardarProducto = (req, res) => {
    const data = req.body;
    console.log(req.body);
    const { nombreProducto, fkIdProveedor, descripcionProducto, cantProducto, precioProducto, imagenProducto, clasificacionProducto, tallaProducto, estadoCatalogo } = req.body;
    if (!nombreProducto, !fkIdProveedor, !descripcionProducto, !cantProducto, !precioProducto, !imagenProducto, !clasificacionProducto, !tallaProducto, !estadoCatalogo) {
        res.send('Debes ingresar todos los datos')
    } else {
        req.getConnection((err, conn) => {
            conn.query('INSERT INTO producto set ?', [data], (err, producto) => {
                if (producto) {
                    res.send('Datos ingresados exitosamente')
                } else {
                    res.send('Ocurrio un error al ingresar los datos')
                    console.log(err);
                }
            })
        })
    }

}

controller.listarProductos = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM the_locker.producto;', (err, producto) => {
            res.send(producto)
        })
    })

}

controller.actualizarProducto = (req, res) => {
    const data = req.body;
    const { idProducto } = req.body;
    console.log(idProducto);
    req.getConnection((err, conn) => {
        conn.query('UPDATE producto set ? WHERE idProducto = ? ', [data, idProducto], (err, producto) => {
            if (producto) {
                res.send('Cambios realizados exitosamente');
            } else {
                res.send("Ocurrio un error al tratar de actualizar")
                console.log(err);
            }
        })
    })

}

controller.eliminarProducto = (req, res) => {
    const { idProducto } = req.body;
    console.log(idProducto);
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM producto WHERE idProducto = ?', [idProducto], (err, Producto) => {
            res.send('Cambios realizados exitosamente');
        })
    })
}

controller.mostrarCatalogoClientes = (req, res) => {
    var clasificacion = req.params
    req.getConnection((err, conn) => {
        if (clasificacion.id == 'Explorar') {
            conn.query('SELECT * FROM the_locker.producto;', (err, producto) => {
                if (producto) {
                    res.render('catalogo', {
                        data: producto,
                    })
                } else {
                    console.log('Ocurrio un error al tratar de cargar el catalogo');
                    console.log(err);
                }
            })
        } else {
            conn.query('SELECT * FROM producto WHERE clasificacionProducto = ?', [clasificacion.id], (err, producto) => {
                if (producto) {
                    res.render('catalogo', {
                        data: producto,
                    })
                } else {
                    console.log('Ocurrio un error al tratar de cargar el catalogo');
                }
            })
        }
    })
}
module.exports = controller;