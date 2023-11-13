'use strict'

//Parametros REST y SPREAD

//REST lo que hace es capturar los parametros que estan de mas
//y los puede aguardar en un array, se utiliza: ...Name
function listadoFrutas(fruta1, fruta2, ...restoDeFrutas) {
    console.log("Fruta 1: ", fruta1);
    console.log("Fruta 2: ", fruta2);
    console.log(restoDeFrutas);
}

listadoFrutas("Naranja", "Manzana", "Sandia", "Pera", "Melon", "Coco");

//SPREAD los que hace es que ponamos elegir parametros para una funcion
//pero los parametros estan en un array, entonces con ...Name
//puedes enviar el parametro y va aumentando, osea no se queda con el mismo
var frutas = ["Naranja", "Manzana"];
listadoFrutas(...frutas, ...frutas, "Sandia", "Pera", "Melon", "Coco");