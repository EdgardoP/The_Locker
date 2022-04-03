let fila = document.querySelectorAll('.fila')
let txtIdProducto = document.getElementById('idProducto')
let txtDescripcionProducto = document.getElementById('descripcionProducto')
let txtNombreProducto = document.getElementById('nombreProducto')
let txtCantProducto = document.getElementById('cantProducto')
let txtPrecioProducto = document.getElementById('precioProducto')
let txtImagenProducto = document.getElementById('imagenProducto')
let cmbClasificacionProducto = document.getElementById('clasificacionProducto')
let cmbTallaProducto = document.getElementById('tallaProducto')
let comboEstadoCatalogo = document.getElementById('estadoCatalogo')
let cmbProveedor = document.getElementById('proveedor')

let idProducto = document.querySelectorAll('.idProducto');
let descripcionProducto = document.querySelectorAll('.descripcionProducto')
let nombreProducto = document.querySelectorAll('.nombreProducto')
let cantProducto = document.querySelectorAll('.cantProducto')
let precioProducto = document.querySelectorAll('.precioProducto')
let imagenProducto = document.querySelectorAll('.imagenProducto');
let clasificacionProducto = document.querySelectorAll('.clasificacionProducto')
let tallaProducto = document.querySelectorAll('.tallaProducto')
let estadoCatalago = document.querySelectorAll('.estadoCatalogo')
let proveedor = document.querySelectorAll('.proveedor')

window.onload = function() {
    for (let index = 0; index < fila.length; index++) {
        fila[index].addEventListener('click', function() {
            txtIdProducto.value = idProducto[index].innerHTML.trim()
            txtDescripcionProducto.value = descripcionProducto[index].innerHTML.trim()
            txtNombreProducto.value = nombreProducto[index].innerHTML.trim()
            txtCantProducto.value = parseInt(cantProducto[index].innerHTML)
            txtPrecioProducto.value = parseInt(precioProducto[index].innerHTML)
            txtImagenProducto.value = imagenProducto[index].src
            cmbClasificacionProducto.value = clasificacionProducto[index].innerHTML.trim()
            cmbTallaProducto.value = tallaProducto[index].innerHTML.trim()
            comboEstadoCatalogo.value = estadoCatalago[index].innerHTML.trim()
            cmbProveedor.value = proveedor[index].id
        })
    }
}

let btnNuevo = document.getElementById('btnNuevoProducto');
let btnActualizar = document.getElementById('btnActualizarProducto')
let btnEliminar = document.getElementById('btnEliminarProducto')

btnNuevo.addEventListener('click', (e) => {
    e.preventDefault()
    let formulario = document.getElementById('formularioInventario');
    formulario.setAttribute('action', '/thelocker/producto/guardar')
    formulario.submit();
})
btnActualizar.addEventListener('click', (e) => {
    e.preventDefault()
    let formulario = document.getElementById('formularioInventario');
    formulario.setAttribute('action', '/thelocker/producto/actualizar')
    formulario.submit();
})

btnEliminar.addEventListener('click',(e)=>{
    e.preventDefault()
    let formulario = document.getElementById('formularioInventario');
    formulario.setAttribute('action', '/thelocker/producto/eliminar')
    formulario.submit();
})