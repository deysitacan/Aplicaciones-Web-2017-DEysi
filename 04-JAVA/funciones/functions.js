/**
 * Created by deysitacan on 22/5/17.
 */

function ImprimirHolaMundo(){

    console.log("Hola mundo");

}

ImprimirHolaMundo();//undefined
//void

function Suma2numeros(a,b) {
    return a+b;


}

var resu=Suma2numeros(1,2);//3
console.log(resu);//I:3
console.log(Suma2numeros(1,2));//I:3

function Operar2Numeros(n1,n2,funcion) {
    n1=n1+1;
    n2=n2+2;
funcion(n1,n2);
}

Operar2Numeros(2,4 function (primerNumero,segundoNumero) {
//primer numero:3
    //segundo nimero:6
    return primerNumero*segundoNumero;//3*6=18
})