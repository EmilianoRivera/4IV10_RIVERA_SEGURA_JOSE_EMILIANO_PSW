window.onload = () => {
    

    const instrucciones = [
        "ESCAPA!", "1. TRATA QUE EL OBJETO NO TE ALCANCE!", "2. NO TOQUES LOS BORDES!", "3.DURA EL MÁXIMO TIEMPO POSIBLE!"
    ]

    const btnInicio = document.querySelector("#iniciar");

    const h1Bienvenida = document.querySelector("#bienvenida");
    const divIniciar = document.querySelector(".iniciar");
    const divContainer = document.querySelector(".container");
    const divInicioTempo = document.querySelector(".iniciar-tempo");
    btnInicio.addEventListener("click", function (evento){
        eliminarDivs()
    });
    function instruccionesDesplegado (){
        for(var i =0; i<instrucciones.length; i++){
            alert(`${instrucciones[i]}`);
        }
    }

    class Temporizador {
        constructor(id, inicio, final) {

            this.id = id;

            this.inicio = inicio;
            this.final = final;
            this.contador = this.inicio;


            this.conteoSeg = function () {
                if (this.contador == this.final) {
                    this.conteoSeg = null;
                    alert("FIN DEL JUEGO");
                    window.location.reload();
                    return;
                }
                document.getElementById(this.id).innerHTML = this.contador--;
                setTimeout(this.conteoSeg.bind(this), 1000);
            };

        }
    }
  
    function crearTemporizador (){
        const tempo = document.createElement("div");
        const tiempoRestante = document.createElement("h2");
        tempo.classList.add("tempoDiv");
        tiempoRestante.setAttribute("id", "tiempoRestante");
        tiempoRestante.textContent = "110";
        divContainer.appendChild(tempo);
        tempo.appendChild(tiempoRestante);
        let temporizador =new Temporizador('tiempoRestante', 110,0 );
        temporizador.conteoSeg();
        
        
    }
    function crearCirculos () {
        const areaJuego = document.createElement("div");
        const circulo = document.createElement("div");
        const enemigo = document.createElement("div");
        areaJuego.classList.add("areaJuego");
        circulo.classList.add("circulo");
        enemigo.classList.add("enemigo");
        divContainer.appendChild(areaJuego);
        areaJuego.appendChild(circulo);
        areaJuego.appendChild(enemigo);
        movimientoCirculos(areaJuego, circulo, enemigo)
    }
    
    function movimientoCirculos (area, objetoMovPlayer,objetoMovEnemigo ){
        const player = {
            element :objetoMovPlayer, 
            topPosition : 300,
            leftPosition: 100,
            velocidad: 100,
            move: function(direccion){
                switch (direccion) {
                    case "ArrowUp": 
                        this.topPosition = this.topPosition - this.velocidad;
                        this.element.style.top = this.topPosition + "px";
                        console.log("Me muevo arriba")
                        break;
                    case "ArrowDown":
                        this.topPosition = this.topPosition + this.velocidad;
                        this.element.style.top = this.topPosition + "px";
                        console.log("Me muevo abajo");
                        break;
                    case "ArrowRight":
                        this.leftPosition = this.leftPosition + this.velocidad;
                        this.element.style.left = this.leftPosition + "px";
                        break;
                    case "ArrowLeft":
                        this.leftPosition = this.leftPosition - this.velocidad;
                        this.element.style.left = this.leftPosition + "px";
                        break;
                    default:
                        break;
    
                }
            }
        };
    
        onkeydown = (key) => {
            player.move(key.code);
        }
        
        
        const enemy = {
            element: objetoMovEnemigo,
            topPosition : 600,
            leftPosition: 500,
            step: 15,
            playerLeftPosition: 0,
            playerTopPosition: 0,
            chase: function(player) {
                this.playerTopPosition = player.element.offsetTop;
                console.log("DISTANCIA AL ALTO: " + this.playerTopPosition);
                this.playerLeftPosition = player.element.offsetLeft;
                console.log("DISTANCIA AL IZQUIERDA: " + this.playerLeftPosition);
                
                if(this.playerTopPosition != this.topPosition || this.playerLeftPosition != this.leftPosition) {
                    
                    if(this.playerTopPosition > this.topPosition) {
                        this.topPosition = this.topPosition + this.step;
                    }else if( this.playerTopPosition <215   ){
                        alert("Tocaste el borde");
                        window.location.reload();
                    }else if( 680 <this.playerTopPosition){
                        alert("Tocaste el borde");
                        window.location.reload();
                    }

                    else {
                        this.topPosition = this.topPosition - this.step;
                    }   
    
                    if(this.playerLeftPosition > this.leftPosition) {
                        this.leftPosition = this.leftPosition + this.step;
                    } else if (this.playerLeftPosition  <2  ){
                        alert("Tocaste el borde");
                        window.location.reload();
                    }else if(1260 <this.playerLeftPosition){
                        alert("Tocaste el borde");
                        window.location.reload();
                    }
                    else {
                        this.leftPosition = this.leftPosition - this.step;
                    }
                    this.move();
                }else if(this.playerTopPosition == this.topPosition || this.playerLeftPosition == this.leftPosition){
                    alert("Perdiste");
                    window.location.reload();
                }

    
            }, 
            move: function() {
                this.element.style.top = this.topPosition + 'px';
                this.element.style.left = this.leftPosition + 'px';
            }
        }
    
        const game = setInterval(() => {
            enemy.chase(player);
        }, 50);
        
          
    }
    
    function eliminarDivs (){
        h1Bienvenida.divInicioTempo = divInicioTempo.removeChild(h1Bienvenida);
        h1Bienvenida.divInicioTempo = divInicioTempo.removeChild(divIniciar);
        divInicioTempo.divContainer = divContainer.removeChild(divInicioTempo);
        instruccionesDesplegado()
        crearTemporizador()
        crearCirculos()
    }


}
