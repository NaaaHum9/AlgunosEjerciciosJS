'use strict'

//Transformacion de textos
var numero = 444;
var texto1 = "Bienvenido al curso de JavaScript";
var texto2 = "Es muy buen curso";

//Remplazar texto 
console.log(texto1);
var busqueda = texto1.replace("curso","juegos");
console.log(busqueda);

console.log(" ");

//Separar un string, corta el string donde tu le indiques
console.log(texto1);
var busqueda = texto1.slice(10);
console.log(busqueda);
//tambien se puede en un rango

//Separa el string y lo aguarda en un array
var busqueda = texto1.split(" ");
console.log(busqueda);

//Quita los espacios al inicio y final del string
var busqueda = texto1.trim();
console.log(busqueda);