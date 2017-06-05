/**
 * Created by deysitacan on 22/5/17.
 */


var texto="";

//arreglos

var arregloNumeros=[1,2,3,4];
var arregloStrings=["a","b","c"];
var arrgloBooleanos=[true,false,true];

arregloNumeros=[1,"a",true,[1,"b"],{}];

var matriz=[[1,2],[3,4]]

//    0  1
// 0  1  2
// 1  3  4

//  OBJETO JSON
var objetonoTACION={};
var objeto2={
    llave:"valor",
    llave2:"valor",
    llave3:"valor",


}
objeto2.llave;//valor
objeto2.llave2;//valor
objeto2.llave3;//valor

var objetoComplejo={
    nombre:"",
    apellido:"",
    fechaNacimiento: new Date(),
    mayorEdad:true,
    peso:70.2,
    altura:127,
    saltar:function () {//funcioj sin nombre:anonimous fuction
        console.log("saltar")
    },
    correr:function () {
        console.log("correr")
    },
    sumar:function (a,b) {
        return a+b;
    }


    imprimirNombre:function () {
        return this.nombre+"" +this.apellido+"";
    }

};

objetoComplejo.altura//127

objetoComplejo.apellido//""
objetoComplejo.nombre;
objetoComplejo.nombre="Deysi";
objetoComplejo.apellido="Miño";
objetoComplejo.nombre;
objetoComplejo.apellido;
objetoComplejo.titulo="Ingeniero";

var arregloStringq=["1","2"];
arregloStringq.push("3");//aumenta valor al final de arreglo["1","2","3"];

arregloStringq.pop();//["1","2"];
arregloStringq.splice(2,0,'3');