const inputUsuarioIngresado = document.querySelector("#usuario-ingresado");
const inputContraseniaIngresada = document.querySelector("#contrasenia-ingresada");
const inputConfirmaContrasenia = document.querySelector("#confirmar-contrasenia");

const CLAVE_USUARIOS = "lista-usuarios";
const CLAVE_CONTRASENIAS = "lista-contrasenias";

function registrarCuenta() {
    let contraseniaUno = inputContraseniaIngresada.value;
    let contraseniaDos = inputConfirmaContrasenia.value;
    let listaUsuarios = "def lista usuarios";
    let listaContrasenias = "def lista contrasenias";
    
    if (contraseniaUno === contraseniaDos) {
        document.querySelector("a").href = "./index.html";

        listaUsuarios = JSON.parse(localStorage.getItem(CLAVE_USUARIOS));
        listaContrasenias= JSON.parse(localStorage.getItem(CLAVE_CONTRASENIAS));
        if (listaUsuarios === null) {
            listaUsuarios = [];
            localStorage.setItem(CLAVE_USUARIOS,JSON.stringify(listaUsuarios));
        }
        if (listaContrasenias === null) {
            listaContrasenias = [];
            localStorage.setItem(CLAVE_CONTRASENIAS,JSON.stringify(listaContrasenias));
        }

        listaUsuarios.push(inputUsuarioIngresado.value);
        localStorage.setItem(CLAVE_USUARIOS,JSON.stringify(listaUsuarios));
        listaContrasenias.push(inputContraseniaIngresada.value);
        localStorage.setItem(CLAVE_CONTRASENIAS,JSON.stringify(listaContrasenias));
       
        
    }else{
        alert("nos son iguales");
        document.querySelector("a").href = "a";
    }
 
}