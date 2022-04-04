let txtNombre = document.getElementById('nombreCompleto')
let txtdireccion = document.getElementById('direcEnvio')
let cmbNombreTarjeta = document.getElementById('nombreTarjeta')
let numeroTarjeta = document.getElementById('NoTarjeta')
let codigo = document.getElementById('codigoSeguridad')

let btnPagar = document.getElementById('btnPago')

btnPagar.addEventListener('click', (e) => {
    e.preventDefault()
    if (txtNombre.value == "" || txtdireccion.value == "" || numeroTarjeta.value == "" || codigo == "") {
        mensajeError.style = 'display:block'
        mensajeError.innerHTML = 'No puedes dejar espacios en blanco'
    } else if (isNaN(codigo.value) == true || isNaN(numeroTarjeta.value == true)) {
        mensajeError.style = 'display:block'
        mensajeError.innerHTML = 'Ingresa el codigo correctamente'
    }  else if(numeroTarjeta.value.length < 16){
        mensajeError.style = 'display:block'
        mensajeError.innerHTML = 'Ingresa correctamente el numero de tarjeta'
    }else {
        mensajeError.style = 'display:none'
        formulario.submit();
    }
})