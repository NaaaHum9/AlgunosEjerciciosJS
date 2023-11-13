'use strict'

/**
 * Utilizar un bucle, mostrar la suma y la media de los numeros introducidos 
 * hasta introduccir un numero negativo y ahi mostrar el resultado
 */

var suma = 0;
var conta = 0;

do {
    var numero = parseInt(prompt("Introdusca un numero", 0));
    if (isNaN(numero)) {
        numero = 0;
    } else if (numero >= 0) {
        suma += numero;
        conta++;
    }
    
} while (numero >= 0);

alert("La suma de todos los numeros es: "+ suma);
alert("La media es: "+ (suma/conta));