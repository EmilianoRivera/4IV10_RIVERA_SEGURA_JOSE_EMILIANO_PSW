/*
JavaScript es un lenguaje
que posee un paradigma orientado a objetos, funciones
y eventos.
Por tal motivo presenta una particularidad que es:

NO TIPADO
No existe int, float, straing, ni char, ni nada :((

Todo es var -> variable

De acuerdo al estándar ES6 se manejan 3 tipos de variable

VAR es una variable global
LET es una variable del tipo "Protected"
CONST es un valor constante
*/

function validar(formulario){

    if(formulario.nombre.value.length <= 3){
        alert("Favor de ingresar más de 3 caracteres en campo nombre");
        formulario.nombre.focus();
        return false;
    }

    var checarABC = "qwertyuiopasdfghjklñzxcvbnm" + 
    "QWERTYUIOPASDFGHJKLÑZXCVBNM";

    var cadenaNombre = formulario.nombre.value;

    alert(cadenaNombre);

    var todoesvalido = true;

    for(var i = 0; i < cadenaNombre.lenght; i++){
        var caracteres = cadenaNombre.charAt(i);
        for(var j = 0; j < checarABC.length; j++){
            if(caracteres == checarABC.charAt(j)){
                break;
            }
        }
        if(j == checarABC.length){
            todoesvalido = false;
            break;
        }
    }

    if(!todoesvalido){
        alert("Ingresa solo letras en el campo nombre");
        formulario.nombre.focus();
        return false;
    }

    var edad = parseInt(formulario.edad.value);

    alert(edad);

    if((edad < 0) || (edad >= 99)){
        alert("Favor de ingresar una edad válida de entre 01 y 99 años");
        formulario.edad.focus();
        return false;
    }

    var checarABC = "0123456789";

    var cadenaNombre = formulario.edad.value;

    alert(cadenaNombre);

    var todoesvalido = true;

    for(var i = 0; i < cadenaNombre.lenght; i++){
        var caracteres = cadenaNombre.charAt(i);
        for(var j = 0; j < checarABC.length; j++){
            if(caracteres == checarABC.charAt(j)){
                break;
            }
        }
        if(j == checarABC.length){
            todoesvalido = false;
            break;
        }
    }

    if(!todoesvalido){
        alert("Ingresa solo números en el campo edad");
        formulario.edad.focus();
        return false;
    }

    //es obtener el campo de correo
    var email = formulario.correo.value

    //vamos a crear una expresion regular
    var prueba = /([Aa-Zz]+[0-9]+\.){10}\@([Aa-Zz]+[0-9]){8}\.([Aa-Zz]+[0-9]){3}/g

    alert("Email " + (prueba.test(email) ? " " : " NO ") + "valido")
    return prueba.test


}

