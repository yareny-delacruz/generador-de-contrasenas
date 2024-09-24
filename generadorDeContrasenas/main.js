//var cantidad = 6; var puede ser llamado desde cualquier parte del código
//let cantidad = 8; let permite tener accesibilidad controlada
//let texto = "texto";
//console.log(typeof cantidad); //qué tipo de dato es la 
//variable llamada
//if(cantidad < 8){
//   alert("La catnidad de caracteres tiene que ser mayor que 6")
//}
let cantidad = document.getElementById("cantidad");
let botón = document.getElementById("generar");
let contrasena  = document.getElementById("contrasena");
const cadenaCaracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
//meter todos los caracteres que puede dar el generador = 
//funciones
function generar() {
    let numeroDigitado = parseInt(cantidad.value); //tratar cantidad como número, transformar a número
    //console.log(numeroDigitado); // revisar que cantidad se haya transformado a número
    if (numeroDigitado < 8) {
        alert("La cantidad debe ser mayor a 8");
    }
    let password=" ";
    for(let i=0; i < numeroDigitado; i++){
        //inicializar índice, condición para que pare, contador, sumarizador o salto
        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        // para localizar una posición * los caracteres en el códig 
        password += caracterAleatorio;
        //concatenar y guardar los caracteres 
        console.log(caracterAleatorio);//respuesta en consola
    }
    console.log("password generada" + password); //respuesta en cosnosola
    //asignar la contraseña generada
    contrasena.value=password;
    // Validar si la contraseña es fuerte
    if (validacion(password)) {
        alert("La contraseña es fuerte, ya que cuenta con Mayúsculas y números.");
    } else {
        alert("La contraseña es débil. Debe contener al menos una mayúscula y un número.");
    }
}

function limpiar(){
    contrasena.value=" ";
}

function validacion(password){
    let tieneNumero = false;
    let tieneMayuscula = false;

    // Recorrer la contraseña para verificar si tiene números y mayúsculas
    for (let i = 0; i < password.length; i++) {
        let caracter = password[i];

        // Verificar si el caracter es un número
        if (!isNaN(caracter)) {
            tieneNumero = true;
        }

        // Verificar si el caracter es una mayúscula
        if (caracter === caracter.toUpperCase() && isNaN(caracter)) {
            tieneMayuscula = true;
        }
    }

    // Devolver el resultado al final de la función
    return tieneNumero && tieneMayuscula;
}








