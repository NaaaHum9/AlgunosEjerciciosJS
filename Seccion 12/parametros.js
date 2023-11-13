'use strict'

function calculadora(num1, num2) {
    console.log("Suma: "+(num1 + num2));
    console.log("Resta: "+(num1 - num2));
    console.log("Multiplicacion: "+(num1 * num2));
    console.log("Divicion: "+(num1/num2));
    console.log("-----------------------");
}

calculadora(12,3);

for (let i = 1; i <= 10; i++) {
    console.log(i);
    calculadora(i, i+1);
}