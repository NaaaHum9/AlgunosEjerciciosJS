'use strict'

function porConsola(num1, num2) {
    console.log("Suma: "+(num1 + num2));
    console.log("Resta: "+(num1 - num2));
    console.log("Multiplicacion: "+(num1 * num2));
    console.log("Divicion: "+(num1/num2));
    console.log(mostrar);
    console.log("-----------------------");
}

function porPantalla(num1, num2) {
    document.write("Suma: "+(num1 + num2));
    document.write("Resta: "+(num1 - num2));
    document.write("Multiplicacion: "+(num1 * num2));
    document.write("Divicion: "+(num1/num2));
    document.write(mostrar);
    document.write("-----------------------");
}

function calculadora(num1, num2, mostrar = false) {
    if (mostrar == false) {
        porConsola(num1, num2);
    }else{
        porPantalla(num1, num2);
    }

}

calculadora(12,3);
calculadora(14, 90, true);

/*for (let i = 1; i <= 10; i++) {
    console.log(i);
    calculadora(i, i+1);
}
*/