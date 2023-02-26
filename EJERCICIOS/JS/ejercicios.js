const validaciones = {
    inversionlimite: /[0-9]/,
    letras: /[a-zA]{1, 10}/i,
    calif: /[0-9]/
};
const descuentos = {
    papas: 0.02,
    pastelito: 0.1, 
    lacteo: 0.075
};
//Validacion del Primer Ejercicio
//(inversion > 0.0) && (inversion <1000000.0)
function val1 (){
    inversion = parseFloat(form_uno.inversion.value);
    if((validaciones.inversionlimite.test(inversion)) && (inversion.length > 0) && (inversion.length <=6) && (inversion>0) && (inversion <999999)){
        ganado = parseFloat(inversion * 0.02);
        total = parseFloat(ganado * 36.0);
        document.getElementById('ganancia1').value +=  `${total}`;
        
    }else{
        alert("No puede ingresar esa cantidad ");
        return false;
    }
    form_uno.inversion.focus();
}

function val2 (){
    sueldo = parseFloat(orm_dos.sueldo.value);
    if((validaciones.inversionlimite.test(sueldo)) && (sueldo.length > 0) && (sueldo.length <=6) && (sueldo>0) && (sueldo <999999)){
        sueldo = parseFloat(sueldo);
        comisiones = 0;
        impuesto = 0;
        totalcomi =0;
        total = 0;
        comisiones = parseFloat(sueldo * 0.35);
        impuesto = parseFloat(sueldo*0.12)
        sueldo -= impuesto
        totalcomi = parseFloat(comisiones * 5)
        total = parseFloat(totalcomi + sueldo)
        
        document.getElementById("ganancia").value += `${total}`;
    }else {
        alert("No puede ingresar esa cantidad");
        return false;
    }
    form_dos.sueldo.focus();
}


function val3(){
    eleccion = parseFloat(form_tres.producto.value);
    valpapas = /papas/i; 
    const valpas = {
        primeraforma: /pastel/i,
        segundaforma: /pastelito/i
    };
    const valleche = {
        primeraforma: /leche/i,
        segundaforma: /lacteo/i,
        terceraforma: /lechita/i
    }
    if((validaciones.letras.test(eleccion)) && (eleccion.length > 3) || (eleccion.length <=10)){
        alert(eleccion)
        if (valpapas.test(eleccion)){
            prec = 10.0;
            desc = parseFloat(10 * descuentos.papas);
            prec -= desc
            document.getElementById("pago").value += `${prec}`     
        }else if (valpas.primeraforma.test(eleccion) ||valpas.segundaforma.test(eleccion) ){
            alert("Si llego")
            prec = 50.0;
            desc = parseFloat(50 * descuentos.pastelito);
            prec -= desc;
            document.getElementById("pago").value += `${prec}`;
        }else if (valleche.primeraforma.test(eleccion) ||valleche.segundaforma.test(eleccion) || valleche.terceraforma.test(eleccion) ){
            prec = 20.0;
            desc = parseFloat(20 * descuentos.lacteo);
            prec -= desc;
            document.getElementById("pago").value += `${prec}`;  
        }else{
            alert("No esta ese producto");
        }
        
    }else{
        alert("No válido");
        return false;
    }
    form_tres.producto.focus();
}

function val4(){
    p1 = parseFloat(form_cua.calificacion_uno.value);
    p2 = parseFloat(form_cua.calificacion_dos.value);
    p3 = parseFloat(form_cua.calificacion_tres.value);
    examen = parseFloat(form_cua.examen.value);
    pro = parseFloat(form_cua.proyecto.value);
    if((validaciones.calif.test(p1) && p1 >= 0 && p1 <= 10) && (validaciones.calif.test(p2)  && p2 >= 0 && p2 <=10 )&& (validaciones.calif.test(p3) &&  p3>=0 && p3 <= 10) &&  
    (validaciones.calif.test(examen) &&  examen >= 0 && examen <= 10 ) && (validaciones.calif.test(pro)  && pro >= 0 && pro <=10)){ 
        parcialf = parseFloat((p1+p2+p3)/3.0);
        promediof = parseFloat((parcialf* .55) + (examen * .30)+(pro * .15));
        document.getElementById("promedio").value += `${promediof}`;
    }else {
        alert("No válido");
        return false;
    }
    form_cua.promedio.focus();

    
}

function val5(){
  
    total = parseInt(form_cinc.totala.value);
    totalh = parseInt(form_cinc.hombres.value);
    totalm = parseInt(form_cinc.mujeres.value);
    suma = 0.0;
    calch = 0.0;
    calcm = 0.0;
    sump  = totalh + totalm;
    if (validaciones.calif.test(total) && total >= 2 && total <=60 && sump == total){
        calch = (hombres*100)/total;
        calcm = (mujeres*100)/total;
        suma = calch + calcm ;
        document.getElementById("porcentaje").value += `Hombres: ${calch}. Mujeres: ${calcm}`;
    }else {
        alert("No válido");
        return false;
    }
    form_cinc.porcentaje.focus();
}
/*
"""

Problema 6

x = int(input("Ingrese su año de nacimiento: "))
y = int(input("Ingrese el año actual: "))
z = y-x
print(f"Tiene {z} años")
"""

"""
Problema 7

x = int(input("Ingrese un numero: "))
y = int(input("Ingrese otro numero: "))
if x > y:
    print(f"El mayor es {x}: {x**y}")
elif x<y:
    if (y != 0):
        print(f"El mayor es {y}: {x/y}")
    else:
        print("No se puede dividir entre 0")
elif x ==y:
    print(f"El resultado es: {x*y}")
"""
"""
Problema 8



# Vamos a poner los números en una lista
numeros = []

# Le agregamos 3 números
for i in range(3):
  numero = float(input("Introduce el número #{}: ".format(i + 1)))
  numeros.append(numero)

# Asumir que el mayor es el primero de la lista
mayor = numeros[0]
# Recorrer y comparar
for numero in numeros:
    if numero > mayor:
        mayor = numero
# Imprimir el resultado
print("Mayor:", mayor)
"""
"""
Problema 9

pagoHora= int(input("Ingrese el pago por hora: "))
horasTotales = float(input("Horas trabajadas: "))
horasNormales, extras,pagoNormal, pagoExtras, pagoTotal = 40, 0,0,0,0
if horasTotales >40:
    extras = horasTotales - horasNormales
    if extras <= 8:
        pagoExtras = (2 *pagoHora) * extras
        pagoNormal = horasNormales * pagoHora
        pagoTotal = pagoExtras + pagoNormal
        print(f"El pago por las horas extras es: ${pagoExtras} El pago de horas normales es:${pagoNormal} ")
        print(f"El pago total es de: ${pagoTotal}")
    elif extras > 8:
        restante = extras -8 ##se le resta 8 porque es el rango que hay para que cambie la regla, osea se empiece a pagar el triple
        if restante>=1:
            pagoNormal = 48 * pagoHora
            pagoExtras = pagoHora * restante * 3
            pagoTotal = pagoExtras + pagoNormal
            print(f"El pago por las horas extras es: ${pagoExtras} El pago de horas normales es:${pagoNormal} ")
            print(f"El pago total es de: ${pagoTotal}")
elif horasTotales <= 40:
    pagoNormal = horasTotales * pagoHora
    print(f"El pago de horas normales es:${pagoNormal} ")
else:
    print("Hubo un error")             
"""    
"""
Problema 10

salario = float(input("Ingrese su salario: "))
antiguedad = float(input("Ingrese su antiguedad: "))


total= 0
if (antiguedad <1):
    uti = salario * 0.05
    total = uti + salario
    print("El total es de: ", total)
elif (antiguedad >= 1) or (antiguedad <2):
    uti = salario * 0.07
    total = uti + salario
    print("El total es de: ", total)
elif (antiguedad>=2 ) or (antiguedad < 5):
    uti = salario * 0.1
    total = uti + salario
    print("El total es de: ", total)
elif (antiguedad >=5) or (antiguedad <10):
    uti = salario * 0.15
    total = uti + salario
    print("El total es de: ", total)
elif(antiguedad >= 10):
    uti = salario * 0.2
    total = uti + salario
    print("El total es de: ", total)
else: 
    print("Hubo un error con los datos")

"""



*/
