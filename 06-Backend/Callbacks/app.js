/**
 * Created by deysitacan on 3/6/17.
 */
console.log("eMPIEZA");
const fs=require('fs');
fs.readFile('texto.txt','utf8',function (err,data) {
    if(err) throw err;
    console.log(data);

});
console.log("Termina");