const inputUsuarioIngresado = document.querySelector("#usuario-ingresado");
const inputContraseniaIngresada = document.querySelector("#contrasenia-ingresada");
const inputConfirmaContrasenia = document.querySelector("#confirmar-contrasenia");

const CLAVE_USUARIOS = "lista-usuarios";
const CLAVE_CONTRASENIAS = "lista-contrasenias";

function registrarCuenta() {
    let contraseniaUno = inputContraseniaIngresada.value;
    let contraseniaDos = inputConfirmaContrasenia.value;
    if (contraseniaUno === contraseniaDos) {
        document.querySelector("a").href = "./index.html";
       
        
    }else{
        alert("nos son iguales");
        document.querySelector("a").href = "a";
    }
 
}