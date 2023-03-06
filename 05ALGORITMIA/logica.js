//problema 1 reverse 
function problema1 (){
    var p1_input = document.querySelector("#p1-input").value;
    
    var sepa = p1_input.split(" ");

    var invierte = sepa.reverse();
    
    document.querySelector("#p1-output").textContent = invierte;
}
//problema 2
function problema2(){
    var result = 0;
    var x1 = document.querySelector('#p2-x1').value;
    var x2 = document.querySelector('#p2-x2').value;
    var x3 = document.querySelector('#p2-x3').value;
    var x4 = document.querySelector('#p2-x4').value;
    var x5 = document.querySelector('#p2-x5').value;

    var vector1 = [x1, x2, x3, x4, x5];
    vector1 = vector1.sort(function (vec1, vec2){
        return vec1-vec2;
    });
    //-------------------y-------------------------
    var y1 = document.querySelector('#p2-y1').value;
    var y2 = document.querySelector('#p2-y2').value;
    var y3 = document.querySelector('#p2-y3').value;
    var y4 = document.querySelector('#p2-y4').value;
    var y5 = document.querySelector('#p2-y5').value;
    var vector2 = [y1, y2, y3, y4, y5];
    vector2 = vector2.sort(function (vec1, vec2){
        return vec2-vec1; // MAYOR DE VECT 1 * MENOR DE VECT2 Y ES PERMUTABLE, LOS NUMEROS SE REDUCEN A SU MINIMO
    });
    
    for(var i = 0; i < vector1.length; i++){
        result += vector1[i] * vector2[i];
    }

    document.querySelector('#p2-output').textContent = 'El mínimo producto escalar es: '+ result;
}

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
        return palabras.replace(/ \s/g, ' ').toUpperCase();
    });
    //Calcular los caracteres unicos
    p3_respuesta = '';
    //Funcion que se encarga de controlar que contiene el arrglo, separar cada caracter y contarlo
    p3_palabras.forEach(function(palabra, i){
        var letras_unicas = [];
        var palabra_array = palabra.split();

        //Iterar el alfabeto
        alfabeto.forEach(function(letra, j){

            palabra_array.forEach(function(letra_palabras, k){

                if(letra_palabras == letra){

                    if(letras_unicas.indexOf(letra) <0){

                        letras_unicas.push(letra);

                    }

                }

            });

        });
        p3_respuesta += 'Palabra: ' + palabra + ' = ' + letras_unicas.length + '\n';
        
    });
    document.querySelector('#p3-output').textContent  = p3_respuesta;
    
}