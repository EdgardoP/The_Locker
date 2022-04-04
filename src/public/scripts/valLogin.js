let txtEmail = document.getElementById('emailUsuario');
let password = document.getElementById('contrasenia');
let btnIniciarSesion = document.getElementById('btnIniciarSesion');
let mensajeError = document.getElementById('mensajeError');
let formulario = document.getElementById('formulario')

btnIniciarSesion.addEventListener('click', (e) => {
    e.preventDefault()
     if ( txtEmail.value == "" || password.value == "") {
        mensajeError.style = 'display:block'
        mensajeError.innerHTML = 'No puedes dejar espacios en blanco'

    } else if (password.value.length < 8) {
        mensajeError.style = 'display:block'
        mensajeError.innerHTML = 'La contraseña debe ser mayor a 8 caracteres'
    } else {
        mensajeError.style = 'display:none'
        formulario.submit();
    }


})