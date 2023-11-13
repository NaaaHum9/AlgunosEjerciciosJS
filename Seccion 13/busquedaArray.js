'use strict'

var lengujes = new Array("PHP","JS","Go","JAVA");
//La funcion find hace la busqueda de un elemento que le indiquemos
//y nos devuelve el elemento
var busqueda = lengujes.find(function(lengujes){
    return lengujes == "PHP";
})
console.log(busqueda);

// el codigo se puede resudir con la funcion flecha
var busqueda1 = lengujes.find(lengujes => lengujes == "Go");
console.log(busqueda1);

//Para obtener el indice en donde esta un elemento se utiliza
//la funcion findIndex
var busqueda2 = lengujes.findIndex(lengujes => lengujes == "JS");
console.log(busqueda2);


var precios = [10, 15, 20, 28, 30, 38, 90];

//Le metodo some comprueba si algun precio es mayor o igual a un valor 
//que necesitemos saber, segresa un false o true
var busquedaNum = precios.some(precios => precios < 3);
console.log(busquedaNum);
