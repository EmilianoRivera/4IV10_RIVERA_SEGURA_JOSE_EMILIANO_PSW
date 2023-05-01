alert("hola")
$(function (){     
    var expr = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;     
    $("#form1sew").validate({
        //MASCOTA
        rules: {
            nombre_mascota : {
                required: true,
                minlength: 3
            },
            fecha_nac: {
                required: true,
                number: true,
                min: 18
            },
            tipo_esp: {
                required:true
            },
            tipo_raza: {
                required:true
            },
            correo: {
                required: true,
                correo: true
            }, //appat, apmat, dir, tipo_esp, tipo_raza, sexo, señas, pelaje, password, nombre
            sexo: {
                required: true
            },
            nombre: {
                required: true,
                minlength: 3,
                maxlength:10
            },
            appat: {
                required: true,
                minlength: 5,
                maxlength:10
            },
            apmat: {
                required: true,
                minlength: 5,
                maxlength:10
            },
            dir: {
                required: true,
                minlength: 6,
                maxlength: 30
            }, 
            pelaje: {
                required: true,
                minlength: 10,
                maxlength: 45
            },
            señas: {
                required: true,
                minlength: 10,
                maxlength: 45
            }
        },
        messages : {
        //MENSAJES DE ERROR
        nombre_mascota: {
            minlength: "El nombre debe al menos tener 2 caracteres",
            },
        fecha_nac: {
            required: "Por favor, ingresa tu edad",
            number: "Por favor, ingresa un valor numérico",
            max: "No puedes ingresar esa fecha"
            },
        correo: {
            correo: "El email debe de tener este formato: cosa@cosa.cosa"
            },
            appat: {
                required: "Por favor, ingresa tu apellido paterno",
                maxlength: "No puedes ingresar mas de 10 caracteres",
                minlength: "No puedes ingresar mas de 10 caracteres"
            },  
            apmat: {
                required: "Por favor, ingresa tu apellido materno",
                maxlength: "No puedes ingresar mas de 10 caracteres",
                minlength: "No puedes ingresar mas de 10 caracteres"
                
            }             
        }
    });
});

       
