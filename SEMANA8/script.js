const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const mensaje = document.getElementById("mensaje");

const botonEnviar = document.getElementById("btnEnviar");

const msgNombre = document.getElementById("errorNombre");
const msgCorreo = document.getElementById("errorCorreo");
const msgMensaje = document.getElementById("errorMensaje");

const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validarNombre() {

    if (nombre.value.trim().length >= 3) {
        nombre.className = "valido";
        msgNombre.textContent = "";
        return true;
    } else {
        nombre.className = "invalido";
        msgNombre.textContent = "Mínimo 3 caracteres";
        return false;
    }

}

function validarCorreo() {

    if (formatoCorreo.test(correo.value.trim())) {
        correo.className = "valido";
        msgCorreo.textContent = "";
        return true;
    } else {
        correo.className = "invalido";
        msgCorreo.textContent = "Correo no válido";
        return false;
    }

}

function validarMensaje() {

    if (mensaje.value.trim().length >= 5) {
        mensaje.className = "valido";
        msgMensaje.textContent = "";
        return true;
    } else {
        mensaje.className = "invalido";
        msgMensaje.textContent = "Mínimo 5 caracteres";
        return false;
    }

}

nombre.addEventListener("keyup", validarNombre);
correo.addEventListener("keyup", validarCorreo);
mensaje.addEventListener("keyup", validarMensaje);

document.getElementById("btn-alerta").addEventListener("click", function () {
    alert("¡Gracias por visitar nuestro sitio!");
});

document.getElementById("formulario").addEventListener("submit", function (e) {

    e.preventDefault();

    let n = validarNombre();
    let c = validarCorreo();
    let m = validarMensaje();

    if (n && c && m) {
        alert("Formulario enviado correctamente");
        this.reset();

        nombre.className = "";
        correo.className = "";
        mensaje.className = "";
    }

});
