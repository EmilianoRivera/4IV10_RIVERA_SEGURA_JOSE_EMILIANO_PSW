const expresion = {
    inicial : /^\d/, 
    interes : /^\d/, 
    tiempo : /^\d{1}$|^\d{2}/
}


//VARIABLES
var body = document.getElementsByTagName("body")[0];
var tblbody = document.getElementById("#tbody");
if(tblbody == null){
    var tblbody = document.getElementById("tbody");
}
var datos_tabla = document.getElementById("#datos_tabla");
calcular = document.querySelector("#calcular");
generar = document.querySelector("#agregar");
borrar = document.querySelector("#borrar");
let acum = 0;
let final = 0;



//FUNCION QUE VALIDA LOS CAMPOS
function validaciones(ini,interes, tiempo){
    if(ini >=1 && ini <1000000){
        if(interes>=1 && interes <=100){
            if (tiempo >=1 && tiempo <=20){
                if ((expresion.inicial.test(ini))  && expresion.interes.test(interes)&& expresion.tiempo.test(tiempo)){ 
                    calculos (ini, interes, tiempo, acum);
                }else{
                    console.log(expresion.inicial.test(ini) + " && " + expresion.interes.test(interes) + " & "+ expresion.tiempo.test(tiempo) );
                    alert("Revise nuevamente los campos");
                }   
            }else{
                alert("Ingrese entre 1 y 10 años");
            }
        }else{
            alert("Ingrese un interes entre entero entre 1 y 100");
        }
    }else{
        alert("Ingrese una cantidad entre $1 y $1000000");
    } 
    agregarDatos(ini, interes, tiempo, final, acum);
}

//CALCULOS
function calculos (ini, interes, tiempo){
    let monto = ini;
    for(let n = 0; n <=  tiempo; n++ ){ 
        final  +=monto*((1 +interes/100)**tiempo);
    }  
    let acum = final;
    document.getElementById("cap_final").value = "$ " + final.toFixed(2);
}




//CALCULOS, CREACION DE LA TABLA Y AGRAGADO DE LOS DATOS 
function agregarDatos(ini, interes, tiempo, final, acum){
   let prestamo = ini;
   let pagos = 12 * tiempo;//MESES
   let cuota = 0;
   var i, j, k = 0;
   var textoCelda;
   for(i = 0; i <= pagos; i++){ 
       cuota = [prestamo* (interes/12)*(1+interes/12)*pagos]  /  [(1+interes/12)*(pagos)-1]; 
   }
        let abono_capital = cuota - prestamo *interes/pagos;
        let saldo_final = prestamo - abono_capital;
    
        for( j = 0; j<i-1; j++){
            var hilera = document.createElement("tr");
            for( k=0; k< 6; k++){
                var celda = document.createElement("td");
                
                if (k==0 ){
                    textoCelda = document.createTextNode(`PAGO:  ${j+1}`);
                }else if(k==1){
                    textoCelda = document.createTextNode(` $ ${prestamo}`);
                }else if(k==2){
                    textoCelda = document.createTextNode(` $ ${cuota.toFixed(2)}`);
                }else if(k==3){
                    textoCelda = document.createTextNode(`${interes} %`);
                }else if(k==4){
                    textoCelda = document.createTextNode(`$ ${(cuota - prestamo *interes/pagos).toFixed(2)}`);
                }else if(k==5){
                    textoCelda = document.createTextNode(  `$ ${saldo_final.toFixed(2)}`);
                }
                celda.appendChild(textoCelda);
                hilera.appendChild(celda);
            }
            tblbody.appendChild(hilera);
        }
    
    datos_tabla.appendChild(tblbody);
    body.appendChild(datos_tabla);
}
//CREACION DEL EVENTO PARA EL INPUT CALCULAR, Y LLAMADO A LA FUNCION VALIDAR
calcular.addEventListener("click", function (e){
    let  cap_ini = parseInt(document.querySelector("#cap_ini").value);
    let tasa_interes = parseInt(document.querySelector("#tasa_interes").value);
    let tiempo = parseInt(document.querySelector("#tiempo").value);
    validaciones(cap_ini, tasa_interes, tiempo);
});

borrar.addEventListener("click", function (e){
    location.reload();

    let  ini= document.querySelector("#cap_ini")
    let  interes= document.querySelector("#tasa_interes");
    let tiempo = document.querySelector("#tiempo");
    let cap_final = document.querySelector("#cap_final");

    if (ini !=null && interes != null && tiempo != null && cap_final != null){
        ini.value =" ";
        interes.value =" ";
        tiempo.value =" ";
        cap_final.value = " ";
        
    }
});

 /*
    #pago = la iteración del bucle
    saldo inicial = ini
    cuota (valor que se paga mes con mes)
    interes
    abono a capital = cuota - interes
    saldo final 
    cuota = [(P * (i/m)(1+1/m)^(n*m))/(i/m)^(nm-1)]
    P =prestamo
    i = tasa de interes anual
    m= # capitalizaciones (#pagos en el año)
    n= # años
    */
   

