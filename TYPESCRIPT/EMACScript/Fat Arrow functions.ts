/**
 * Created by deysitacan on 29/5/17.
 */
function holamundo {
    console.log("Hola Mundo");

}
var holaMundo2=function () {

}
let holaMundo3=()=>{

    console.log("Hola Mundo");//devuelve undefined-- void
}

let holaMundo4=()=> {console.log("Hola Mundo");

console.log("Hola Mundo");

console.log("Hola Mundo");}

let holaMundo5=function(){

    return 5;
}
let holaMundo6=()=> 5;//para devolver algo corto

let holaMundo6=()=>{

    let a=5;
    console.log(a);
}


let saludar=nombre=>"Hola"+nombre;//cuando se tiene un parametro se omite el parentesis father functions

let saludarConApellido=(nombre,apellido)=> `Hola ${nombre} ${apellido}

`;
console.log(saludarConApellido("Deysi","Tacan"));
//correr con tsc
//comando para ejecutar javascript node

