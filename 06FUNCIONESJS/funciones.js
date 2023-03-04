/*
LAS VARIABLES QUE SE OCUPAN DENTRO DE JS :

VAR: QUE ACTUALEMENTE ESTA EN SUSTITUCION.

LET: ES UNA VARIABLE "PROTEGIDA" PORQUE SOLO FUNCIONA DENTRO DE UNA FUNCION O METODO
DECLARADO EN UN FRAGMENTO DE CODIGO .

CONST: LA CUAL ES EL VALOR CONSTANTE EN TODO EL DOCUMENTO Y NO PUEDE  CAMBIAR SU ESTADO.
SI ES GLOBAL, NO SE VA A SOBREESCRIBIR SU VALOR
SI ES VAR, SE PUEDE CAMBIAR SU VALOR
*/

let x = "x";
if (true){
    const x = "y";
}
console.log(x);
//DIFERENCIA ENTRE FUNCION Y FUNCION FLECHA(callback)
//EJEMPLO: SUMA DE DOS NUMEROS
function sumarFuncionNormal(n1,n2){
    return n1 + n2;
}
//LA  `` SE OCUPA CUANDO QUEREMOS MODIFICAR EL COMPORTAMINETO DE UN HTML O INCRUSTAR EL JS 
//EN EL HTML
console.log(`la suma de (3,4): ${sumarFuncionNormal(3,4)}` );
/*
UNA FUNCION FLECHA TIENE COMO ESTRUCTURA : 
"CADENA" -> ID, CLASE, NOMBRE, ATRIBUTO, se llama a si misma 
*/

const sumaFuncionFlecha = (n1, n2) => n1 + n2;
console.log(`La suma de (4,3):  ${sumaFuncionFlecha(4,3)}` );

const razasDePerros = [
    "Gran Danes",
    "Pastor Aleman",
    "Chihuahua",
    "PitBull",
    "Dalmata",
    "San Bernardo"
];
//FOR NORMAL
for(let i = 0; i < razasDePerros.length; i++){
    console.log(razasDePerros[i]);
}
//FOR OF
for(const raza of razasDePerros){
    console.log(raza);
}
//FOR in -> SE REFIERE A LA PARTE INTERNA DEL ARREGLO (INDICES)
//UNA COSA ES RECORRER EL ARREGLO Y OTRA LSO VALORES DEL ARREGLO
for(const indice in razasDePerros){
    console.log(razasDePerros[indice]);
}
//FOR EACH ES PODER ITERAR SOBRE ELEMENTOS DEL ARREGLO QUE NO DEVUELVEN NADA 
//ES UN CALLBACK POR SI MISMO
razasDePerros.forEach((raza, indice, arregloOriginal )=> {
    console.log(raza);
});

//LEER LA INFOGRAFIA DE JS EN EL TEAMS 
//metodo find, metodo indexOd, metodo map, metodo sort

