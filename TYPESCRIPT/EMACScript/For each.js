/**
 * Created by deysitacan on 29/5/17.
 */
var arregloN = [1, 2, 3, 4, 5, 6];
var resultado = arregloN.forEach(function (valor, indice, arreglo) {
    console.log("El valor es:" + valor);
    console.log("El indice es" + indice);
    console.log("El arreglo es", arreglo);
});
console.log("Resultado es igual a:", resultado);
