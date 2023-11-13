'use strict'

var categorias = ['Accion', 'Terror', 'Comedia'];
var peliculas = ['La verdad duele', 'La vida es bella', 'Gran torino'];

var cine = [categorias, peliculas];

var elemento = "";
do {
    elemento = prompt("Introduce tu pelicula: ");
    peliculas.push(elemento);
} while (elemento != 'ACABAR');

peliculas.pop();

//Para agregar un elemento  
//peliculas.push('Batman');

//Para sacar un elemento
//peliculas.pop('Batman');

var indice = peliculas.indexOf("La vida es bella");
if (indice > -1) {
    peliculas.splice(indice, 1); //eleimina los siguientes que tu le digas
}

//Convierte los array en cadenas 
var peliculas_string = peliculas.join();