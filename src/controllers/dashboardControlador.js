const controller = {};

controller.menuEmpleados = (req, res) => {
    res.render('menuEmpleados')
}
controller.controlUsuarios = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM the_locker.usuario;', (err, usuarios) => {
            res.render('controlUsuarios', {
                data: usuarios
            });
        })
    })
}

controller.controlInventario = (req, res) => {
    let query = 'select idProducto,' +
        'nombreProducto, ' +
        'nombreProveedor,' +
        'descripcionProducto, ' +
        'cantProducto, ' +
        'precioProducto, ' +
        'imagenProducto, ' +
        'clasificacionProducto, ' +
        'tallaProducto, ' +
        'estadoCatalogo ' +
        'from producto inner join ' +
        'proveedor on fkIdproveedor = idProveedor';

    let listaProveedores = null;

    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM the_locker.proveedor', (err, proveedores) => {
            if (proveedores) {
                listaProveedores = proveedores;
            } else {
                res.send('Ocurrio un error al consultar los proveedores')
            }
        })
    })
    req.getConnection((err, conn) => {
        conn.query(query, (err, producto) => {
            res.render('controlInventario', {
                data: producto,
                dataLista: listaProveedores
            })
        })
    })
}

controller.controlVentas = (req, res) => {

    const query = "SELECT noTicket, fechaVenta,nombreProducto, " +
        "nombreTarjeta, noTarjeta,nombreCompleto, direcEnvio, " +
        "cantidadProducto,precioProducto, cantidadProducto * precioProducto As Total " +
        "FROM ventas " +
        "inner join carrito on fkIdCarrito = idCarrito " +
        "inner join producto on fkIdProducto = idProducto ";

    req.getConnection((err, conn) => {
        conn.query(`${query}`, (err, ventas) => {
            res.render('controlVentas', {
                data: ventas
            })
        })
    })
}

controller.controlCatalogo = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM the_locker.producto;', (err, producto) => {
            res.render('controlCatalogo', {
                data: producto
            })
        })
    })
}

controller.controlBitacora = (req, res) => {
    const query = 'SELECT idBitacora,' +
        'accionRealizada, ' +
        'moduloAfectado, ' +
        'fechaBitacora, ' +
        'fkEmailUsuario, ' +
        'nombreUsuario ' +
        'FROM bitacora ' +
        'inner join usuario on ' +
        'fkEmailUsuario = emailUsuario';

    req.getConnection((err, conn) => {
        conn.query(`${query}`, (err, bitacora) => {
            console.log(bitacora);
            res.render('controlBitacora', {
                data: bitacora
            })
        })
    })
}


module.exports = controller;