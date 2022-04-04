let txtId = document.getElementById('idUsuario');
let txtNombre = document.getElementById('nombreUsuario');
let txtApellido = document.getElementById('apellidoUsuario');
let txtEdad = document.getElementById('edadUsuario');
let cmbSexo = document.getElementById('sexoUsuario');
let txtEmail = document.getElementById('emailUsuario');
let txtpassword = document.getElementById('contrasenia')
let cmbTipo = document.getElementById('tipoUsuario');

let fila = document.querySelectorAll('.fila');

let idUsuario = document.querySelectorAll('.idUsuario');
let nombreUsuario = document.querySelectorAll('.nombreUsuario');
let apellidoUsuario = document.querySelectorAll('.apellidoUsuario');
let edadUsuario = document.querySelectorAll('.edadUsuario');
let sexoUsuario = document.querySelectorAll('.sexoUsuario');
let emailUsuario = document.querySelectorAll('.emailUsuario');
let password = document.querySelectorAll('.password');
let tipoUsuario = document.querySelectorAll('.tipoUsuario');
let mensajeError = document.getElementById('mensajeError');
let check = false;

window.onload = function() {

    for (let index = 0; index < fila.length; index++) {
        fila[index].addEventListener("click", function() {
            txtId.value = idUsuario[index].innerHTML.replace(/ /g, "")
            txtNombre.value = nombreUsuario[index].innerHTML.replace(/ /g, "")
            txtApellido.value = apellidoUsuario[index].innerHTML.replace(/ /g, "")
            txtEdad.value = parseInt(edadUsuario[index].innerHTML)
            cmbSexo.value = (sexoUsuario[index].innerHTML).charAt(1);
            cmbTipo.value = parseInt(tipoUsuario[index].innerHTML)
            txtEmail.value = emailUsuario[index].innerHTML.replace(/ /g, "")
            txtpassword.value = password[index].innerHTML.replace(/ /g, "")
        })
    }
}


//Botones fomulario Usuarios
let btnEliminar = document.getElementById('btnEliminarUsuario');
let btnActualizar = document.getElementById('btnActualizarUsuario');
let btnNuevo = document.getElementById('btnNuevoUsuario');
let encabezado = document.getElementById('encabezado')

btnEliminar.addEventListener('click', (e) => {
    e.preventDefault()
    validar(e)
    let formulario = document.getElementById('formUsuarios');
    formulario.setAttribute('action', '/thelocker/usuario/eliminar');
    if (check == true) {
        formulario.submit()   
    }
})

btnNuevo.addEventListener('click', (e) => {
    e.preventDefault()
    validar(e)
    let formulario = document.getElementById('formUsuarios');
    formulario.setAttribute('action', '/thelocker/usuario/guardar');
    if (check == true) {
        formulario.submit()   
    }
})

btnActualizar.addEventListener('click', (e) => {
    validar(e)
    e.preventDefault()
    let formulario = document.getElementById('formUsuarios');
    formulario.setAttribute('action', '/thelocker/usuario/actualizar');
    if (check == true) {
        formulario.submit()   
    }
})

const capturarDatos = (data) => {
    console.log(data);
}

const validar = (e) => {
    e.preventDefault()
    if (txtNombre.value == "" || txtApellido.value == "" || txtEdad.value == "" || txtEmail.value == "" || txtpassword.value == "") {
        mensajeError.style = 'display:block'
        mensajeError.innerHTML = 'No puedes dejar espacios en blanco.'
    } else if (cmbSexo.value == "Seleccione") {
        mensajeError.style = 'display:block'
        mensajeError.innerHTML = 'Elije un sexo.'
    } else if (cmbTipo.value == "0") {
        mensajeError.style = 'display:block'
        mensajeError.innerHTML = 'Elije tipo de usuario.'
    } else if (isNaN(txtEdad.value) == true) {
        mensajeError.style = 'display:block'
        mensajeError.innerHTML = 'Ingrese la edad correcta.'
    } else {
        mensajeError.style = 'display:none'
        check = true;
    }
}

encabezado.addEventListener('click', (e) => {
    txtNombre.value = ""
    txtApellido.value = ""
    txtId.value = ""
    txtEdad.value = ""
    cmbSexo.value = "Seleccione"
    txtEmail.value = ""
    txtpassword.value = ""
    cmbTipo.value = "0"
})