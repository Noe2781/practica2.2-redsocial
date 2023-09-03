const inputUsuarioNombre = document.querySelector("#usuario-nombre");
const inputUsuarioContrasenia = document.querySelector("#usuario-contrasenia");

const CLAVE_USUARIOS = "lista-usuarios";
const CLAVE_CONTRASENIAS = "lista-contrasenias";

function verificar() {
    let nombreIngresado = inputUsuarioNombre.value;
    let contraseniaIngresada = inputUsuarioContrasenia.value;
    let listaUsuarios = "def lista usuarios";
    let listaContrasenias = "def lista contrasenias";
    let ingresoVerificado = false;
    


    listaUsuarios = JSON.parse(localStorage.getItem(CLAVE_USUARIOS));
    if (listaUsuarios === null ) {
        alert("no hay cuentas registradas");
    }else{
        

        for (let i = 0; i < listaUsuarios.length; i++) {
            if (listaUsuarios[i] === nombreIngresado) {
                listaContrasenias =  JSON.parse(localStorage.getItem(CLAVE_CONTRASENIAS )); 
                for (let i = 0; i < listaContrasenias.length; i++) {
                    if (listaContrasenias[i] === contraseniaIngresada) {
                         ingresoVerificado = true;
                    }
                    
                }
            }
            
        }

        if (ingresoVerificado) {
            alert("cuenta verificada, puede ingresar");
        }else{
            alert("Error: Usuario y/o contraseña incorrecta");
        }
    }
}  