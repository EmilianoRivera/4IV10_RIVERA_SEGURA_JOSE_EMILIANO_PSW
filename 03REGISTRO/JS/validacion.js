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
        console.log(formulario.nombre.value)
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

    var checarABC = "0123456789";// /[0-9]/

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
//let fechaHora = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;


}


/*
const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
    usuario: /^[a-zA-ZO-9\_\-]{4,16}/,
    nombre: /^[a-zA\s]{1,40}$/,
    password: /^.{4,12}$/,
    correo: /^[a-zA-ZO-9_.+-]+@[a-zA-ZO-9-]\.[a-zA-ZO-9-.]+$/,
    telefono: /^\d{7,14}$/
}


const campos = {
    usuario: false,
    nombre: false,
    password: false,
    correo: false,
    telefono: false

}
const validarFormulario = (e) => {
    switch(e.target.name){
        case "usuario":
            validarCampo(expresiones.usuario, e.target, 'usuario');
        break;
        case "nombre":
            validarCampo(expresiones.nombre, e.target, 'nombre');
        break;
        case "password":
            validarCampo(expresiones.nombre, e.target, 'password')
            validarPassword2()
        break;
        case "password2":
            validarPassword2()
        break;
        case "correo":
            validarCampo(expresiones.nombre, e.target, 'correo')
        break;
        case "telefono":
            validarCampo(expresiones.nombre, e.target, 'telefono')
        break;
    }
}

const validarCampo = (expresion, input, campo) => {
    if (expresion.usuario.test(input.value)){
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error').classList.remove('formulario__input-error-activo`);
        campos[campo] = true;
    } else {
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
        document.getElementById(`grupo__${campo}`).classList.add('fa-times-check');
        document.getElementById(`grupo__${campo}`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos[campo] = false;
    }
}

const validarPassword2 = () => {
    const inputPassword1 =  document.getElementById('password');
    const inputPassword2 =  document.getElementById('password2');

    if (inputPassword1.value !== inputPassword2.value){
        document.getElementById(`grupo__password2`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-correcto');
        document.getElementById(`grupo__password2`).classList.add('fa-times-check');
        document.getElementById(`grupo__password2`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos['password'] = false;
    } else {
        document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo__password2`).classList.add('formulario__grupo-correcto');
        document.getElementById(`grupo__password2`).classList.remove('fa-times-check');
        document.getElementById(`grupo__password2`).classList.add('fa-check-circle');
        document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos['password'] = true;
    }
}


inputs.forEach((input)=> {
    input.addEventListener('keyup', validarFormulario );
    input.addEventListener('blur', validarFormulario );
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const terminos = document.getElementById('terminos');

    if(campos.usuario  && campos.nombre  && campos.correo  && campos.password  && campos.telefono && terminos.checked) {
        formulario.reset();


        document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
        setTimeout(() => {
            document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
        }, 5000);

    document.querySelectorAll('formulario__grupo-correcto').forEach ((icono) => {
        icono.classList.remove('formulario__grupo-correcto');
    });

    } else {
        document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
    }
});
*/
