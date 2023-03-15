/*Primero tenemos que hacer un mapeo sobre las imagenes que se van a trabajar para el rompecabezas
Porque debemos saber donde esta situada cada pieza y a partir de ello compararla con la imagen
principal. Si hace match gana, sino hay que seguir comparando el orden hasta que coincidan*/

var instrucciones = ["Utiliza las flechas de navegacion, para mover las piezas", 
"Ordena las piezas hasta alcanzar el objetivo"];
//AQUI VAN LAS FLECHAS
var movimientos = []
//VAMOS A CREAR LA MATRIZ LA MATRIZ PARA LAS POSICIONES DEL ROMPECABEZAS
var rompe = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

var rompeCorrecto = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

//Tenemos que identificar donde esta el punto de partida de la pieza vacia
var filaVacia = 2;
var columnaVacia = 2;
//Necesito una funcion para recorrer el arrglo para pasar por cada elemento
function mostrarInstrucciones(instrucciones){
    for(var i = 0; i <instrucciones.length; i++){
        //Otra funcion que enliste la instruccion 
        mostrarInstruccionesEnLista(instrucciones[i], "lista-instrucciones");
    }
}

function mostrarInstruccionesEnLista(instruccion, idLista){
    var ul = document.getElementById(idLista);
    //ahora agregamos una li
    var li = document.createElement("li");
    //vamos a agregar
    li.textContent = instruccion;
    ul.appendChild(li);
}
//vamos a crear una funcion para ver si ganamos 
function checarSiGane () {
    //tengo que recorrer las piezas y saber si coinciden
    for(var i = 0; i < rompe.length; i++){
        for(var j= 0; j< rompe[i].length; j++){
            var rompeActual = rompe[i][j];
            if( rompeActual !== rompeCorrecto[i][j]){
                return false;
            }
        }
    }
    return true;
}
//Una funcion para decir que si gane
function mostrarCartelGanador (){
    if(checarSiGane()){
        alert("WIIIII A MIMIR");
    }
    return false;
}

/*
Vamos a crear una funcionque se encargue de poder intercambiar las posiciones de las piezas
porque dentro del rompecabezas necesitamos mover 
arreglo[1][2] == arreglo[0][0] 
arreglo[0][0] == arreglo[1][2]*/

function intercambiarPosicionesRompe(filaPos1, columnaPos1, filaPos2, columnaPos2){
    //mis variables de las posiciones
    
    var pos1 = rompe[filaPos1][columnaPos1];
    var pos2 = rompe[filaPos2][columnaPos2];

    //intercambio
    rompe[filaPos1][columnaPos1] = pos2;
    rompe[filaPos2][columnaPos2] = pos1;

}

//Tenemos que actualizar la pieza vacia porque esa es la que se mueve 
function actualizarPosicionVacia(nuevaFila, nuevaColumna){
    filaVacia = nuevaFila
    columnaVacia = nuevaColumna
    
}
//Ahora tengo que validar si la posicion dentro del rompecabezas es la correcta de la pieza
function posicionValidar(fila, columna){
    return(fila>= 0 && fila <= 2 && columna >= 0 && columna<=2); 
}
//Ahora viene la parte del movimiento de las piezas a lo que el hueco es lo que se estara
//moviendo e intercambiando las posiciones para ello tenemos que saber que teclas de navegacion
//se estan posicionando y a que direccion debe de moverse. De ahi el codigo es: 
/*
 arriba 38
 abajo 40
 izquierda 37
 derecha 39
 */
function moverEnDireccion(direccion){
    var nuevaFilaVacia;
    var nuevaColumnaVacia;

    //Si se mueve hacia abajo
    if(direccion === codigosDireccion.ABAJO){
        nuevaFilaVacia = filaVacia+1;
        nuevaColumnaVacia = columnaVacia;
    }
    //Si se mueve hacia arriba
    else if(direccion === codigosDireccion.ARRIBA){
        nuevaFilaVacia = filaVacia-1;
        nuevaColumnaVacia = columnaVacia; 
    }
    else if(direccion === codigosDireccion.DERECHA){
        nuevaFilaVacia = filaVacia;
        nuevaColumnaVacia = columnaVacia+1; 
    }

    else if(direccion === codigosDireccion.IZQUIERDA){
        nuevaFilaVacia = filaVacia;
        nuevaColumnaVacia = columnaVacia-1; 
    }

    //Tengo que checar si la nueva posicion es valida y sino intercambiarla
    if (posicionValidar(nuevaFilaVacia, nuevaColumnaVacia)){
        //intercambio
        intercambiarPosiciones(filaVacia, columnaVacia,nuevaFilaVacia, nuevaColumnaVacia);
        //Actualizar la posicion
        actualizarPosicionVacia(nuevaFilaVacia, nuevaColumnaVacia);
        //agregar el ultimo movicmiento
        agregarUltimoMovimiento(direccion);
    }
}

function intercambiarPosiciones(fila1, columna1, fila2, columna2){
    //Porque vamos a intercambiar posiciones de acuerdo a las piezas
    var pieza1 = rompe[fila1][columna1];
    var pieza2 = rompe[fila2][columna2];
    intercambiarPosicionesRompe(fila1, columna1, fila2, columna2);
    //falta crear una funcion que cambie las posiciones en el DOM
    intercambiarPosicionesDOM('pieza' + pieza1, 'pieza'+pieza2);

}    
function intercambiarPosicionesDOM(idPieza1, idPieza2){
    //obtengo los elementos del DOM
    var elementoPieza1 = document.getElementById(idPieza1);
    var elementoPieza2 = document.getElementById(idPieza2);

    //creo al padre
    var papa = elementoPieza1.parentNode; 
    var cloneElemento1 = elementoPieza1.cloneNode(true);
    var cloneElemento2 = elementoPieza2.cloneNode(true);

    papa.replaceChild(cloneElemento1, elementoPieza2);
    papa.replaceChild(cloneElemento2, elementoPieza1);

}
//identificar codigos de la direccion
var codigosDireccion = {
    IZQUIERDA : 37,
    ARRIBA : 38,
    DERECHA : 39,
    ABAJO: 40
};

//VAMOS A ACTUALIZAR LOS MOVIMIENTOS
function actualizarUltimoMovimiento(direccion){
    //obtenemos el elemento del DOM
    var ultimoMov = document.getElementById("flecha");
    switch (direccion) {
        case codigosDireccion.ARRIBA:
            ultimoMov.textContent = '↑';
            break;
        case codigosDireccion.ABAJO:
            ultimoMov.textContent = '↓';
            break;
        case codigosDireccion.DERECHA:
            ultimoMov.textContent = '→';
            break;
        case codigosDireccion.IZQUIERDA:
            ultimoMov.textContent = '←';
            break;
                
    }
}

function mezclasPiezas(veces){
    if(veces <= 0){
        alert("HOLI WIII")
        return;
    }
    var direcciones = [codigosDireccion.ABAJO, codigosDireccion.ARRIBA, codigosDireccion.DERECHA, codigosDireccion.IZQUIERDA];
    //ahora vamos a meter en un randomlas direcciones
    var direccion = direcciones[Math.floor(Math.random)* direcciones.length];
    //mando a llamar a mover en direccion 
    moverEnDireccion(direccion); 

    //mando un retraso
    setTimeout(function(){
        mezclasPiezas(veces - 1);
    }, 100);
}

//vamos a agregar una funcion ahora si que tecla esta presionando el jugador
function capturarTeclas(){
    document.body.onkeydown = (function (evento){
        if(evento.which === codigosDireccion.ABAJO ||evento.which === codigosDireccion.ARRIBA || evento.which === codigosDireccion.DERECHA ||evento.which === codigosDireccion.IZQUIERDA){
            //coma ya se que tecla mando a llamar a mover en direccion 
            moverEnDireccion(evento.which);
            //actualizo el ultimo movimiento
            actualizarUltimoMovimiento(evento.which);
            var gano = checarSiGane();

            if(gano){
                setTimeout(function(){
                    mostrarCartelGanador();
                }, 500); 
            }
            evento.preventDefault;
        }
    });
}

//function para iniciar 
function iniciar(){
    mezclasPiezas(3);
    capturarTeclas();
}

iniciar(); 

mostrarInstrucciones(instrucciones);