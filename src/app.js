const express = require('express');
const morgan = require('morgan')
const path = require('path')
const app = express();
const mysql = require('mysql');
const myConnection = require('express-myconnection');


//importar rutas
const routerPrincipal = require('./routes/index');
const routerUsuario = require('./routes/usuarios');
const routerRegistro = require('./routes/registro');
const routerLogin = require('./routes/login');
const routerProducto = require('./routes/productos');

//settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))
app.use(express.urlencoded({ extended: true }))

//middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: '3306',
    database: 'the_locker'
}, 'single'))


//routes
app.use('/thelocker/index/', routerPrincipal);
app.use('/thelocker/usuario/', routerUsuario);
app.use('/thelocker/registro/', routerRegistro);
app.use('/thelocker/login', routerLogin);
app.use('/thelocker/producto/', routerProducto)
    //archivos estaticos
app.use(express.static(path.join(__dirname, 'public')))

app.listen(app.get('port'), () => {
    console.log('Servidor en el puerto 3000');
})