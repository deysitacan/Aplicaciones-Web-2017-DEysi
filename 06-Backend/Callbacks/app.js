/**
 * Created by deysitacan on 3/6/17.
 */


console.log("eMPIEZA");

//1 nombre y ruta del archivo
// 2 codificacion
//3. anonymous function (error, contenido del archivo)


let a=2,
    b=3,
resultado;


const fs=require('fs');
const express=require('express')
fs.readFile('text.txt','utf8', (err,data) >= {
    if(err) {throw err;
    console.log(data);}

});
console.log("Termina");