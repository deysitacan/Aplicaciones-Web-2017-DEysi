/**
 * Created by deysitacan on 3/6/17.
 */

function sumar2Numeros(

    numero1:number,
    numero2:number
):number{

        return numero1+numero2;

}
console.log(sumar2Numeros(2,3));

function sumar3Numeros(

    numero3:number=12,
    numero4?:number
):number{

        return numero3+numero4;

}
console.log(sumar3Numeros());//en el caso que no se envie nada le toma como numero3=12 y numero4=vacio