/**
 * Created by deysitacan on 3/6/17.
 */
//FILTER:FILTRAR DATOS, DEL¡VOLVER TODOS LOS ELEMENTOS QUE CUMPEN LA CONDICION
var arreglo = [
    {
        nombre: "Deysi",
        apellido: "Tacan",
        nota: 8,
        id: 1
    },
    {
        nombre: "Deysi",
        apellido: "Floeeres",
        nota: 9,
        id: 2
    },
    {
        nombre: "Alexandra",
        apellido: "Floeeres",
        nota: 6,
        id: 3
    },
    {
        nombre: "Jorge",
        apellido: "Miño",
        nota: 5,
        id: 4
    },
    {
        nombre: "Jor",
        apellido: "Fernando",
        nota: 2,
        id: 5
    },
];
var res = arreglo.filter(function (valor, indice, arreglo) {
    return valor.id > 3;
});
console.log(res);
