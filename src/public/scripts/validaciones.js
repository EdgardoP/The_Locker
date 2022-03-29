let nombreUsuario;
let apellidoUsuario;
let edadUsuario;
let password;
let emailUsuario;
let sexoUsuario;


let validarFormulario = () => {
    nombreUsuario = document.getElementById("nombreUsuario").value;
    apellidoUsuario = document.getElementById("apellidoUsuario").value;
    edadUsuario = document.getElementById("edadUsuario").value;
    emailUsuario = document.getElementById("emailUsuario").value;
    password = document.getElementById("password").value;
    sexoUsuario = document.forms["registroF"]["sexoUsuario"].selectedIndex;

    let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (nombreUsuario == "" || apellidoUsuario == "" || edadUsuario == "" || password == "" || emailUsuario == "") {
        event.preventDefault();
        alert("Parece que has dejado un campo vacio o has ingresado datos incorrectos, porfavor, rellena los campos y vuelve a intentarlo.")
    } else if (!emailRegex.test(emailUsuario)) {
        event.preventDefault();
        alert("Asegurate de haber ingresado un correo valido, porfavor, rellena los campos y vuelve a intentarlo.")
    } else if (!(/^[a-zA-ZÀ-ÿ\s]{3,15}$/.test(nombreUsuario))) {
        event.preventDefault();
        alert("El Nombre del usuario que has ingresado no es valido, rellena los campos y vuelve a intentarlo.")
    } else if (!(/^[a-zA-ZÀ-ÿ\s]{3,15}$/.test(apellidoUsuario))) {
        event.preventDefault();
        alert("El apellido del usuario que has ingresado no es valido, rellena los campos y vuelve a intentarlo.")
    } else if (isNaN(edadUsuario)) {
        event.preventDefault();
        alert("La edad del usuario que has ingresado contiene posee letras o caracteres especiales, rellena los campos y vuelve a intentarlo.")
    } else if (nombreUsuario.length < 3) {
        event.preventDefault();
        alert("Tu nombre de usuario no puede tener menos de dos caracteres, rellena los campos y vuelve a intentarlo.")
    } else if (apellidoUsuario.length < 3) {
        event.preventDefault();
        alert("Tu apellido de usuario no puede tener menos de dos caracteres, rellena los campos y vuelve a intentarlo.")
    } else if (password.length < 8) {
        event.preventDefault();
        alert("Tu contraseña no puede tener menos de 8 caracteres, rellena los campos y vuelve a intentarlo.")
    }else if( sexoUsuario == null || sexoUsuario == 0 ) {
        alert("Debe seleccionar una opción en el campo 'Sexo'");
        event.preventDefault();
    } else {
        console.log("Validacion ejecutada");
    }
}


let validarFormularioLogin = () => {
    emailUsuario = document.getElementById("emailUsuario").value;
    password = document.getElementById("password").value;
    let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (emailUsuario == "" || password == "") {
        event.preventDefault();
        alert("Parece que has dejado un campo vacio o has ingresado datos incorrectos, porfavor, rellena los campos y vuelve a intentarlo.")
    } else if (!emailRegex.test(emailUsuario)) {
        event.preventDefault();
        alert("Asegurate de haber ingresado un correo valido, porfavor, rellena los campos y vuelve a intentarlo.")
    } else if (password.length < 8) {
        event.preventDefault();
        alert("La contraseña que has ingresado no es valida, ingresala de nuevo.")
    } else {
        console.log("Validacion ejecutada");
    }
}