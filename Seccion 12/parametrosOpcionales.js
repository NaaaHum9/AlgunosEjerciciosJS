'use strict'

function calculadora(num1, num2, mostrar = false) {
    if (mostrar == false) {
        console.log("Suma: "+(num1 + num2));
        console.log("Resta: "+(num1 - num2));
        console.log("Multiplicacion: "+(num1 * num2));
        console.log("Divicion: "+(num1/num2));
        console.log(mostrar);
        console.log("-----------------------");
    }else{
        document.write("Suma: "+(num1 + num2));
        document.write("Resta: "+(num1 - num2));
        document.write("Multiplicacion: "+(num1 * num2));
        document.write("Divicion: "+(num1/num2));
        document.write(mostrar);
        document.write("-----------------------");
    }

}

calculadora(12,3);
calculadora(14, 90, true);

/*for (let i = 1; i <= 10; i++) {
    console.log(i);
    calculadora(i, i+1);
}
*/