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
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM the_locker.producto;', (err, producto) => {
            res.render('controlInventario', {
                data: producto
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


module.exports = controller;