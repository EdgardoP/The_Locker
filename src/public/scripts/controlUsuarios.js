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

btnEliminar.addEventListener('click', (e) => {
    e.preventDefault()
    let formulario = document.getElementById('formUsuarios');
    formulario.setAttribute('action', '/thelocker/usuario/eliminar');
    formulario.submit();
})

btnNuevo.addEventListener('click', (e) => {
    e.preventDefault()
    let formulario = document.getElementById('formUsuarios');
    formulario.setAttribute('action', '/thelocker/usuario/guardar');
    formulario.submit();
})

btnActualizar.addEventListener('click', (e) => {
    e.preventDefault()
    let formulario = document.getElementById('formUsuarios');
    formulario.setAttribute('action', '/thelocker/usuario/actualizar');
    formulario.submit();
})

const capturarDatos = (data) => {
    console.log(data);
}