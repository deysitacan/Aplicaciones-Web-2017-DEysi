/**
 * Created by deysitacan on 29/5/17.
 */
function holamundo() {
    console.log("Hola Mundo");
}
var holaMundo2 = function () {
};
var holaMundo3 = function () {
    console.log("Hola Mundo"); //devuelve undefined-- void
};
var holaMundo4 = function () {
    console.log("Hola Mundo");
    console.log("Hola Mundo");
    console.log("Hola Mundo");
};
var holaMundo5 = function () {
    return 5;
};
var holaMundo6 = function () { return 5; }; //para devolver algo corto
var holaMundo6 = function () {
    var a = 5;
    console.log(a);
};
var saludar = function (nombre) { return "Hola" + nombre; }; //cuando se tiene un parametro se omite el parentesis father functions
var saludarConApellido = function (nombre, apellido) { return "Hola " + nombre + " " + apellido + "\n\n"; };
saludarConApellido("Deysi", "Tacan");
