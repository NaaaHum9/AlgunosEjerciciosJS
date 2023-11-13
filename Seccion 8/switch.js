'use string'

var edad = 18;
var imprime = ""

switch (edad) {
    case 18:
        imprime = "Ya eres un adulto";
        break;
    case 20:
        imprime = "Joven adulto";
        break;
    case 30:
        imprime = "Eres un adulto";
        break;
    case 80:
        imprime = "Ya eres un anciano";
        break;
    default:
        imprime = "Edad"
        break;
}

console.log(imprime);