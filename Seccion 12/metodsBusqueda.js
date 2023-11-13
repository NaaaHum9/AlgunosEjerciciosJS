'use strict'

//Transformacion de textos
var numero = 444;
var texto1 = "Bienvenido al curso de JavaScript";
var texto2 = "Es muy buen curso";

//Buscar si existe una palabra dentro de un string
var busqueda = texto1.indexOf("curso");
console.log(busqueda);
//Te da la posicion de donde inicia la palabra
var busqueda = texto1.search("al");
console.log(busqueda);

//busca el elmento y te lo devuelve en un array, pero solo uno
var busquedaM = texto1.match("curso");
console.log(busquedaM);
var busquedaM = texto1.match(/curso/g);
console.log(busquedaM);
//De esat forma ba a buscar en todo el texto, una busqueda global

//Sacar un string
var busqueda = texto1.substr(14,5);
console.log(busqueda);

//Sacar una letra
var busqueda = texto1.charAt(12);
console.log(busqueda);

//Buscar texto en especifico al inicio
var busqueda = texto1.startsWith("Bien");
console.log(busqueda);//Devuelve un true si lo encuentra

//Buscar texto epecifico pero al final
var busqueda = texto1.endsWith("JavaScript");
console.log(busqueda);//Devuelve un true si lo encuentra

//Busca una palabra en todo el texto
var busqueda = texto1.includes("curso");
console.log(busqueda);