'use strict'

/**
 * Hacer un prgrama que muestres los numeros que hay entre dos numeros
 * 
 */

var numero1 = parseInt(prompt("Introdusca un numero: ", 0));
var numero2 = parseInt(prompt("Introdusca un numero:  ", 0));

document.write("<h1>De"+numero1+" a "+numero2+" estan estos numeros: </h1>");
for (var i= numero1; i <= numero2; i++) {
    document.write(i+'<br/>');
    
}
