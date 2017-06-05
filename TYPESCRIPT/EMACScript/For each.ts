/**
 * Created by deysitacan on 29/5/17.
 */

let arregloN=[1,2,3,4,5,6];

let resultado=arregloN.forEach((valor,indice,arreglo)=>{//undefined no devuleve nada

    console.log("El valor es:"+valor);
    console.log("El indice es"+indice);
    console.log("El arreglo es", arreglo);

});
console.log("Resultado es igual a:",resultado);