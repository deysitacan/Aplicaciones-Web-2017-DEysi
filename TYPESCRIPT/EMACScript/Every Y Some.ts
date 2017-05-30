/**
 * Created by deysitacan on 29/5/17.
 */

//AND si todos cumplen verdadero

let arreglo=[1,2,3,4,5,7,10,5];

let resultado=arreglo.map((valor,indice,arreglo)=>{

    return (valor*2)/10;
})
    .some((valor)=>{
        return valor<=0.2;

});

console.log(resultado);

let resultado2=arreglo.every((valor,indice,arreglo)=>{

    return (valor>=7);
});

console.log(resultado2);

//OR- si alguno es verdadero regresa TRUE

let resultado3=arreglo.some((valor,indice,arreglo)=>{

    return (valor<2);
});

console.log(resultado3);//FALSE

