/**
 * Created by deysitacan on 29/5/17.
 */
//AND si todos cumplen verdadero
var arreglo = [1, 2, 3, 4, 5, 7, 10, 5];
var resultado = arreglo.map(function (valor, indice, arreglo) {
    return (valor * 2) / 10;
});
console.log(resultado);
var resultado2 = arreglo.every(function (valor, indice, arreglo) {
    return (valor >= 7);
});
console.log(resultado2);
//OR- si alguno es verdadero regresa TRUE
var resultado3 = arreglo.every(function (valor, indice, arreglo) {
    return (valor < 5);
});
console.log(resultado3);
