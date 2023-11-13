'use strict'

//plantilas de texto

var nombre = prompt("Coloca tu nombre");
var apellido = prompt("Coloca tus apellidos");

//var texto =" Mi nombre es: "+nombre+"<br/> Mis apellidos son: "+ apellido;

var texto = `
<h1>Hola que tal</h1>
<h3>Mi nombre es: ${nombre}</h3>
<h3>Mis apellidos son: ${apellido}</h3>
`;

document.write(texto);