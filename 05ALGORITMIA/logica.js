//problema 1
//problema 2
//problema 3
function problema3(){
    //definir un alfabeto
    var alfabeto = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K',
     'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U' , 'V','W', 'X', 'Y', 'Z']
    ;
    var p3_input = document.querySelector('#p3-input').value;
    //separar todo por ','
    var p3_palabras = p3_input.split(',');

    //funcion que recupera cada palabra y eliminar los espacios
    p3_palabras = p3_palabras.map(function(palabras){
        return palabras.replace(/ \s/g, '').toUpperCase();
    });
    //Calcular los caracteres unicos
    p3_respuesta = '';
    //Funcion que se encarga de controlar que contiene el arrglo, separar cada caracter y contarlo
    p3_palabras.forEach(function(palabra, i){
        var letras_unicas = [];
        var palabra_array = palabra.split();

        //Iterar el alfabeto
        alfabeto.forEach(function(letra, j){
            palabra_array.forEach(function(letra_palabras, j){
                if(letra_palabras == letra){
                    if(letras_unicas.indexOf(letra) <0){
                        letras_unicas.push(letra);
                    }
                }
            });
        });
        p3_res += 'Palabra: ' + palabra + ' = ' + letras_unicas.length + '\n';
        
    });
    document.querySelector('.#p3-output').textContent  = p3_respuesta;
    
}