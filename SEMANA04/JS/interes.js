function validarn(e){
    var teclado = (document.all )? e.keyCode : e.which;
    if(teclado == 8) return true;//El 8 es el patron

    var patron = /[0-9\d\ .]/;

    var codigo = String.fromCharCode(teclado);
    return patron.test(codigo);
}

function interes (){
    var valor = document.getElementById('cantidad').value;
    var resul = parseInt(valor);
    var interes = resul * 0.02;
    var total = resul + interes;
    document.getElementById('cantidadi').value = "$ " + total;
}

function borrard (){
    document.getElementById('cantidad').value = "";
    document.getElementById('cantidadi').value = "";
}
