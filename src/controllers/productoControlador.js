var LocalStorage = require('node-localstorage').LocalStorage;
localStorage = new LocalStorage('/TheLocker');
const controller = {}
const bitacora = "INSERT INTO bitacora ( " +
    "accionRealizada, " +
    "moduloAfectado, " +
    "fechaBitacora, " +
    "fkEmailUsuario) " +
    "VALUES ";
const modulo = 'Producto'
let date = new Date();
let fecha = date.toISOString().split('T')[0]

controller.guardarProducto = (req, res) => {
    const data = req.body;
    console.log(req.body);
    const { nombreProducto, fkIdProveedor, descripcionProducto, cantProducto, precioProducto, imagenProducto, clasificacionProducto, tallaProducto, estadoCatalogo } = req.body;
    if (!nombreProducto, !fkIdProveedor, !descripcionProducto, !cantProducto, !precioProducto, !imagenProducto, !clasificacionProducto, !tallaProducto, !estadoCatalogo) {
        res.send('Debes ingresar todos los datos')
    } else {
        req.getConnection((err, conn) => {
            conn.query(`${bitacora} ('Guardar','${modulo}','${fecha}','${localStorage.getItem('correoUsuario')}')`, (err, producto) => {
                if (producto) {
                    console.log('Se guardo la bitacora')
                } else {
                    console.log(err);
                    console.log('Error al guardar la bitacora');
                }
            })
        })
        req.getConnection((err, conn) => {
            conn.query('INSERT INTO producto set ?', [data], (err, producto) => {
                if (producto) {
                    res.redirect('/thelocker/dashboard/controlInventario')
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
    console.log(data);
    const { idProducto } = req.body;
    console.log(idProducto);
    req.getConnection((err, conn) => {
        conn.query('UPDATE producto set ? WHERE idProducto = ? ', [data, idProducto], (err, producto) => {
            if (producto) {
                res.redirect('/thelocker/dashboard/controlInventario');
            } else {
                res.send("Ocurrio un error al tratar de actualizar")
                console.log(err);
            }
        })
    })
    req.getConnection((err, conn) => {
        conn.query(`${bitacora} ('Actualizar','${modulo}','${fecha}','${localStorage.getItem('correoUsuario')}')`, (err, producto) => {
            if (producto) {
                console.log('Se guardo la bitacora')
            } else {
                console.log(err);
                console.log('Error al guardar la bitacora');
            }
        })
    })

}

controller.eliminarProducto = (req, res) => {
    const { idProducto } = req.body;
    console.log(idProducto);
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM producto WHERE idProducto = ?', [idProducto], (err, Producto) => {
            res.redirect('/thelocker/dashboard/controlInventario');
        })
    })

    req.getConnection((err, conn) => {
        conn.query(`${bitacora} ('Eliminar','${modulo}','${fecha}','${localStorage.getItem('correoUsuario')}')`, (err, producto) => {
            if (producto) {
                console.log('Se guardo la bitacora')
            } else {
                console.log(err);
                console.log('Error al guardar la bitacora');
            }
        })
    })

}

controller.mostrarCatalogoClientes = (req, res) => {
    var clasificacion = req.params
    localStorage.setItem('PaginaActual', clasificacion.id)
    let lista = null;
    let query = `SELECT nombreProducto, cantidadProducto FROM the_locker.carrito ` +
        `inner join ` +
        `producto on fkIdProducto = ` +
        `idProducto where emailUsuario = ` +
        `'${localStorage.getItem('correoUsuario')}' ` +
        `and estadoCarrito = 'reservado'; `; +

    req.getConnection((err, conn) => {
        conn.query(`${query}`, (err, listaCarrito) => {
            if (listaCarrito) {
                lista = listaCarrito
                console.log('Se guardo la lista')
            } else {
                console.log(err);
                console.log('Error al cargar la lista')
            }
        })
    })

    req.getConnection((err, conn) => {
        if (clasificacion.id == 'Explorar') {
            conn.query('SELECT * FROM the_locker.producto;', (err, producto) => {
                if (producto) {
                    res.render('catalogo', {
                        data: producto,
                        dataLista: lista
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
                        dataLista: lista
                    })
                } else {
                    console.log('Ocurrio un error al tratar de cargar el catalogo');
                }
            })
        }
    })
}

controller.cambiarEstado = (req, res) => {
    const estado = req.params;
    const { idProducto } = req.body;
    if (estado.parametro == "Visible") {
        req.getConnection((err, conn) => {
            conn.query(`UPDATE the_locker.producto SET estadoCatalogo = 'Visible' WHERE idProducto = ? `, [idProducto], (err, producto) => {
                res.redirect('/thelocker/dashboard/controlCatalogo')
            })
        })
    } else {
        req.getConnection((err, conn) => {
            conn.query(`UPDATE the_locker.producto SET estadoCatalogo = 'Oculto' WHERE idProducto = ? `, [idProducto], (err, producto) => {
                res.redirect('/thelocker/dashboard/controlCatalogo')
            })
        })
    }
    req.getConnection((err, conn) => {
        conn.query(`${bitacora} ('Cambio Estado','${modulo}','${fecha}','${localStorage.getItem('correoUsuario')}')`, (err, producto) => {
            if (producto) {
                console.log('Se guardo la bitacora')
            } else {
                console.log(err);
                console.log('Error al guardar la bitacora');
            }
        })
    })
}
module.exports = controller;