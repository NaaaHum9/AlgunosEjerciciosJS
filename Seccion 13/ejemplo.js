'use strict'

function resta(num1, num2) {
    return num1 - num2;
}

function suma(num1, num2) {
    return num1 + num2;
}

function multi(num1, num2) {
    return num1 * num2;
}

function igual(num1, num2) {
    if (num1 == num2) {
        prompt("Los numeros son iguales");
    }
    prompt("Los numeros no son iguales")
}

function Main() {
    var num1 = parseInt(prompt("Numero 1: ", 0));
    var num2 = parseInt(prompt("Numero 2: ", 0));

    resta(num1, num2);
    suma(num1, num2);
    multi(num1, num2)
}