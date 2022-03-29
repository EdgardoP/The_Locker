var LocalStorage = require('node-localstorage').LocalStorage;
localStorage = new LocalStorage('/TheLocker');

const controller = {}

controller.listarCarrito = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM the_locker.carrito;', (err, carrito) => {
            res.send(carrito)
        })
    })
}

controller.aggCarrito = (req, res) => {
    const cantidadProducto = parseInt(req.body.cantidadProducto);
    const fkIdProducto = parseInt(req.params.id);
    const estadoCarrito = 'reservado';
    const emailUsuario = localStorage.getItem('correoUsuario')
    const data = {
        cantidadProducto,
        fkIdProducto,
        estadoCarrito,
        emailUsuario
    }
    console.log(data);
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO carrito set ?', [data], (err, carrito) => {
            if (carrito) {
                res.redirect('/thelocker/index')
            } else {
                console.log(err);
                res.send('Ocurrio un problema al ingresar al carrito')
            }
        })
    })
}

controller.carritoPersonal = (req, res) => {
    const query = 'select ' +
        'idCarrito, ' +
        'imagenProducto, ' +
        'nombreProducto, ' +
        'descripcionProducto, ' +
        'cantidadProducto, ' +
        'precioProducto, ' +
        'clasificacionProducto, ' +
        'tallaProducto ' +
        'from producto ' +
        'inner join carrito ' +
        'on carrito.fkIdProducto = ' +
        'producto.idProducto ' +
        `where estadoCarrito = 'reservado' and ` +
        'carrito.emailUsuario = ';


    req.getConnection((err, conn) => {
        conn.query(`${query} '${localStorage.getItem('correoUsuario')}'`, (err, carrito) => {
            if (carrito) {
                // console.log(carrito);
                res.render('Carrito', {
                    data: carrito
                })
            } else {
                console.log(err);
                res.send('Ocurrio un error al tratar de cargar tu carrito');
            }
        })
    })
}

controller.pagarCarrito = (req, res) => {
    let query = 'INSERT INTO `the_locker`.`ventas`' +
        '(`noTicket`, ' +
        '`fkIdCarrito`,' +
        '`fechaVenta`, ' +
        '`nombreTarjeta`,' +
        '`noTarjeta`, ' +
        '`nombreCompleto`,' +
        '`direcEnvio`)' +
        'VALUES';
    const nombreTarjeta = req.body.nombreTarjeta;
    const noTarjeta = req.body.noTarjeta;
    const nombreCompleto = req.body.nombreCompleto;
    const direcEnvio = req.body.direcEnvio;
    let valores = '';
    let id = req.params.id.split(',');
    let aux = id.length;
    let noTicket = Math.floor(Math.random() * (500000000 - 100000000) + 100000000);
    let date = new Date();
    for (let index = 0; index < aux; index++) {
        valores = `('${noTicket}', '${id[index]}', '${date.toISOString().split('T')[0]}', '${nombreTarjeta}', '${noTarjeta}', '${nombreCompleto}', '${direcEnvio}'),`
        query = query.concat(valores)
    }
    req.getConnection((err, conn) => {
        conn.query(`${query.substring(0, query.length - 1)}`, (err, venta) => {
            if (venta) {
                conn.query(`UPDATE carrito SET estadoCarrito = 'pagado' WHERE emailUsuario = '${localStorage.getItem('correoUsuario')}'`, (err, cambio) => {
                    if (cambio) {
                        res.redirect('/thelocker/index')
                    } else {
                        res.send('Ocurrio un error al actualizar los valores')
                    }
                })
            } else {
                res.send('Parece que ha ocurrido un error');
            }
        })
    })
}
module.exports = controller;