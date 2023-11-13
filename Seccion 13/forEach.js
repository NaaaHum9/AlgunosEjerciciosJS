'use strict'

//Coleccion de datos, tienen un indice que comienza en 0

var nombre = "Nahum";
var nombre = ["Nahum", "Victor", "Juan", "Jose", 17, true];
var lengujes = new Array("PHP","JS","Go","JAVA");

//Longitud de un array
//console.log(nombre.length);

/*
var elemento = parseInt(prompt("Que elemento del array quieres?", 0));
if (elemento>=nombre.length) {
    alert("Introduce el numero correcto menor que" +nombre[elemento]);
} else {
    alert("El usuario seleccionado es: "+nombre[elemento]);
}
alert(nombre[elemento]);
*/

document.write("<h1>Lenguajes de programacion del 2018</h1>");
document.write("<ul>");
/*for (let i = 0; i < lengujes.length; i++) {
    document.write("<li>"+lengujes[i]+"</li>");
}
*/

//El forEach nos itera todo el array, lo recorre y lo muestra
lengujes.forEach((elemento, index, data)=>{
    document.write("<li>"+index+"  -  "+elemento+"</li>");
});

var numero = [1,2,3,4,5,6,7,8];
numero.forEach((elem,index, data)=>{
    document.write("<li>"+index+" - "+elem+"</li>");
});
document.write("</ul>");