'use strict'

/**
 * Suma de dos nuemros, introduccidos por pantalla
 * Primero con datos int, float y stric
 */

function main() {
    var num1 = parseInt(prompt("Ingrese el primer numero", 0));
    var num2 = parseInt(prompt("Ingrese el segundo numero", 0));
    var suma, multi;

    suma = sumaNumeros(num1, num2);
    console.log("La suma de los numero es: "+suma);
    alert("La suma de los numero es: "+suma);

    multi = multiNumeros(num1, num2);
    console.log("La multiplicacion de los numeros es: "+multi);
    alert("La multiplicacion de los numero es: "+multi);
}

function sumaNumeros(num1, num2) {
    suma = num1 + num2;
    return suma;
}

function multiNumeros(num1, num2) {
    multi = num1*num2;
    return multi;
}

