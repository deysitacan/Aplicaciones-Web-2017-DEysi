/**
 * Created by deysitacan on 3/6/17.
 */
let numero:number =2;

//sintasxis: nombre de variable:tipo de variable

let verdad:boolean=true;

//Verdad =0; No podemos igualar a un elemento que no sea booleano

verdad=undefined;
verdad=false;
let nombre:string ="Adrian";
nombre=`Yo no soy ${verdad}`

let arregloNumeros1:number[]=[1,2];

let arregloNumeros2:Array <number>=[1,2];
//crear interfaces,un tipo de dato o algo que se quiera implementar

interface UsuarioInt{

    nombre:string,
    apellido:string,
    nota?:number,
    id:number
    //nota? nota opcional
}

let Deysi:UsuarioInt={

    nombre:"Deysi",
        apellido:"Tacan",
    nota:20,
    id:4

}


var juego={};
juego=2;
    juego="string";


let juego=2;
//juego="Nombre" ERROR
//juego={} ERROR

let juego:any=2;
juego="Nombre";
juego={};


const amigo="Amigo";
const numero=2;

//numero=22; ERROR




