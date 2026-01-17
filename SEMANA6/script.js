const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const password = document.getElementById("password");
const confirmar = document.getElementById("confirmar");
const edad = document.getElementById("edad");
const botonEnviar = document.getElementById("btnEnviar");

const msgNombre = document.getElementById("msgNombre");
const msgCorreo = document.getElementById("msgCorreo");
const msgPassword = document.getElementById("msgPassword");
const msgConfirmar = document.getElementById("msgConfirmar");
const msgEdad = document.getElementById("msgEdad");

const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const formatoPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;

function validarNombre(){
    if(nombre.value.length >=3){
        nombre.className = "valido";
        msgNombre.textContent = "";
        return true;
    }
    else{
        nombre.className = "invalido";
        msgNombre.textContent = "Mínimo 3 caracteres";
        return false;
    }
}

function validarCorreo(){
    if(formatoCorreo.test(correo.value)){
        correo.className = "valido";
        msgCorreo.textContent = "";
        return true;
    }
    else{
        correo.className = "invalido";
        msgCorreo.textContent = "Correo inválido";
        return false;
    }
}

function validarPassword(){
    if(formatoPassword.test(password.value)){
        password.className = "valido";
        msgPassword.textContent = "";
        return true;
    }
    else{
        password.className = "invalido";
        msgPassword.textContent = "Debe tener al menos un número y un símbolo";
        return false;
    }
}

function validarConfirmar(){
    if(confirmar.value === password.value && confirmar.value !== ""){
        confirmar.className = "valido";
        msgConfirmar.textContent = "";
        return true;
    }
    else{
        confirmar.className = "invalido";
        msgConfirmar.textContent = "No coincide";
        return false;
    }
}

function validarEdad(){
    if(parseInt(edad.value) >= 18){
        edad.className = "valido";
        msgEdad.textContent = "";
        return true;
    }
    else{
        edad.className = "invalido";
        msgEdad.textContent = "Debe ser mayor de 18 años";
        return false;
    }
}

function validarTodo(){
    if(
        validarNombre() &&
        validarCorreo() &&
        validarPassword() &&
        validarConfirmar() &&
        validarEdad()
    ){
        botonEnviar.disabled = false;
    }
    else{
        botonEnviar.disabled = true;
    }
}

document.querySelectorAll("input").forEach(campo=>{
    campo.addEventListener("input", validarTodo);
});

document.getElementById("registroForm").addEventListener("submit", function(e){
    e.preventDefault();
    alert("Formulario enviado correctamente.");
});

