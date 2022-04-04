let txtNombre = document.getElementById('nombreUsuario');
let txtApellido = document.getElementById('apellidoUsuario');
let txtEdad = document.getElementById('edadUsuario');
let cmbSexo = document.getElementById('sexoUsuario');
let txtEmail = document.getElementById('emailUsuario');
let password = document.getElementById('contrasenia');
let btnRegistrarse = document.getElementById('btnregistrarse');
let mensajeError = document.getElementById('mensajeError');
let formulario = document.getElementById('formulario')
btnRegistrarse.addEventListener('click', (e) => {
    e.preventDefault()
    if (isNaN(txtEdad.value) == true) {
        mensajeError.style = 'display:block'
        mensajeError.innerText = 'Ingresa tu edad'

    } else if (txtNombre.value == "" || txtApellido.value == "" || txtEdad.value == "" || txtEmail.value == "" || password.value == "") {
        mensajeError.style = 'display:block'
        mensajeError.innerHTML = 'No puedes dejar espacios en blanco'

    } else if (cmbSexo.value == '0') {
        mensajeError.style = 'display:block'
        mensajeError.innerHTML = 'Debes seleccionar el sexo'

    } else if (password.value.length < 8) {

        mensajeError.style = 'display:block'
        mensajeError.innerHTML = 'La contraseña debe ser mayor a 8 caracteres'

    } else {
        mensajeError.style = 'display:none'
        formulario.submit();
    }


})