'use strict'

//Funcion anonima
//La funcion no tiene nombre y se utiliza para 

var palicula = function (nombre) {
    return "La pelicula es: "+nombre;
}

//Callback
//Funcion que se ejecuta dentro de otra
//Primero tenemos una funcion que ya se sabe que va a recibir 4 parametros
//Entonces le podemos enviar como paramatros una funcion anonima
//Osea que la funcion anonima va a tomar el nombre de un parametro que este en lafuncion
function sumaMe(num1, num2, sumaYmuestra, sumaPorDos) {
    var sumar = num1 + num2;

    sumaYmuestra(sumar);
    sumaPorDos(sumar);
    return sumar;
}

sumaMe(5, 7, function (dato){
    console.log("La suma es: ", dato);
},
function (dato) {
    console.log("La suma por dos es: ", (dato*2));
}
);
