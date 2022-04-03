let tarjetaControlCatalogo = document.querySelectorAll('.tarjetaControlCatalogo');
let txtNombreProducto = document.getElementById('nombreProducto')
let txtIdProducto = document.getElementById('idProducto')
let txtCantidadProducto = document.getElementById('cantProducto')
let nombreProducto = document.querySelectorAll('.nombreProducto')
let idProducto = document.querySelectorAll('.idProducto')
let cantProducto = document.querySelectorAll('.cantidadProducto')

window.onload = function() {
    for (let index = 0; index < tarjetaControlCatalogo.length; index++) {
        tarjetaControlCatalogo[index].addEventListener("click", function() {
            console.log("Hola");
            txtNombreProducto.value = nombreProducto[index].innerHTML.replace(/ /g, "")
            txtCantidadProducto.value = cantProducto[index].innerHTML.replace(/ /g, "")
            txtIdProducto.value = idProducto[index].innerHTML.replace(/ /g, "")
        })
    }
}

// Botones control Catalogo
let btnVisible = document.getElementById('btnVisible');
let btnOculto = document.getElementById('btnOculto');

btnVisible.addEventListener('click', (e) => {
    e.preventDefault()
    let formulario = document.getElementById('formularioCatalogo')
    formulario.setAttribute('action', '/thelocker/producto/estado/Visible');
    formulario.submit();
})

btnOculto.addEventListener('click', (e) => {
    e.preventDefault()
    let formulario = document.getElementById('formularioCatalogo')
    formulario.setAttribute('action', '/thelocker/producto/estado/Oculto');
    formulario.submit();
})
