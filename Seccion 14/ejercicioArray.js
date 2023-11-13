'use strict'

/**
 * -Hacer un programa que pida 6 numeros por pantalla y los ponga en un array
 * -Mostrar el array entero en la pagina y en la consola
 * -Sacar el array ordenado y mostrarlo
 * -Invertir el orden del array y mostrarlo
 * Mostrar el numero de lementos que tiene el array
 * Hacer una busqueda de un valor intriducido por el usuario y
 * ver si esta y su posicion
 */

function mostrarArray(elementos, texto = "") {
    document.write("<h1>Contenido del array"+texto+"</h1>");
    document.write("<ul>");
    elementos.forEach((elemento, index) => {
        document.write("<li>"+elemento+"</li>");
    });
    document.write("</ul>");
}

var numeros = [];

for (let i=0; i<=5; i++){
    numeros.push(parseInt(prompt("Introdusca un numero:", 0)));
}

console.log(numeros);
mostrarArray(numeros);

numeros.sort(function(a, b){return a-b});
mostrarArray(numeros, 'Numeros ordenados');

numeros.reverse();
mostrarArray(numeros, 'Numeros reverse');

document.write("<h1>Numero de lementos del array: "+numeros.length+"</h1>");
