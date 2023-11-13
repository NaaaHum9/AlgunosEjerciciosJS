'use strict'

/**
 * Hacer un programa que pida dos numeros
 * Que los compare y que nos diga cual es mayor, menor y si son iguales
 */

var numero1 = parseInt(prompt("Introdusca el primer numero", 0));
var numero2 = parseInt(prompt("Ingrese el segundo numero", 0));

if (numero1 == numero2) {
    console.log("Los numero %i y %i son iguales", numero1, numero2);
}if (numero1 > numero2) {
    console.log("El nummero %i es el mayor", numero1);
    console.log("El numero %i es el menor", numero2);
} else {
    console.log("El numero %i es el mayor", numero2);
    console.log("El numero %i es el menor", numero1);
}