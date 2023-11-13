'use strict'

function holaMundo(texto) {
    var hola_mundo = "Texto dentro de funcion";

    console.log(texto);
    console.log(numero);
    console.log(hola_mundo);//Si se puede imprimir porque esta en la funcion
}

var numero = 12;//Si se puede mostrar dentro de una funcion
var texto = "Hola mundo soy una variable global"

holaMundo();
//No se va a poder porque la variable esta dentro de una funcion
console.log(hola_mundo);
