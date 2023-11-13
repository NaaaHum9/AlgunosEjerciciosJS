'use strict'

//Transformacion de textos
var numero = 444;
var texto1 = "Bienvenido al curso de JavaScript";
var texto2 = "Es muy buen curso";

//Convertir numero a strng
var dato = numero.toString();
console.log(dato);
console.log(typeof dato);

//Convertir textos en mayusculas
console.log(texto1);//en minusculas
var dato = texto1.toLocaleUpperCase();
console.log(dato);//en mayusculas

//Convertir textos a minusculas
var dato = texto2.toLocaleUpperCase();
console.log(dato);//Se convierte en mayusculas
var dato = texto2.toLocaleLowerCase();
console.log(dato);//Ahora en minusculas

//Calcular longitud
//Tambien puede contar los elementos de un array
var nombre = "Nahum Velazquez";
console.log(nombre.length);

//Concatenar - Unir textos
var textoTotal = texto1 + " " + texto2;
console.log(textoTotal);
var textoTotal = texto1.concat(" "+texto2+" "+"Holas");
console.log(textoTotal);