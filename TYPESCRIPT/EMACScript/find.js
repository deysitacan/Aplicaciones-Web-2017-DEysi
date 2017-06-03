/**
 * Created by deysitacan on 3/6/17.
 */

let arreglo=[
    {
        nombre:"Deysi",
        apellido:"Tacan",
        id:1
    },
    {
        nombre:"Deysi",
        apellido:"Floeeres",
        id:2
    },

    {
        nombre:"Alexandra",
        apellido:"Floeeres",
        id:3
    },


];

arreglo.find(function(value){

        return value.apellido=="Tacan"
    }
)