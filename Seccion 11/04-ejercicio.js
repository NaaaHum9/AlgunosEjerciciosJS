'use strict'

/**
 * Mostrar los numeros impares que se encuantran entre dos numero dados
 */

var numero1 = parseInt(prompt("Introdusca el primer numero: ", 0));
var numero2 = parseInt(prompt("Introdusca el segundo numero: ", 0));

while (numero1 < numero2) {
    numero1++;
    if (numero1%2 != 0) {
        console.log("El "+numero1+" es impar");
    }
}