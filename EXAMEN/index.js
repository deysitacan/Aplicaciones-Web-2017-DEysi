/**
 * Created by deysitacan on 16/6/17.
 */

var express = require('express');
var app = express();

app.use(express.static('public'))


app.get('/', function (req, res,next) {
    res.send('Hello World!Deysi');
    res.render('index')
});
app.post('/Informacion', function (req, res) {

   var fs=require('fs');
    const express=require('express')
    var archivo=fs.readFileSync('Informacion.txt','utf8');

    res.send(archivo)

});
app.get('/facultaddesistemas', function (req, res) {

    var fs=require('fs');
    const express=require('express')
    var archivo=fs.readFileSync('Informacion.txt','utf8');

    res.send(archivo)

});



app.post('/cabeceras', function (req, res) {

res.append('fecha',new Date());

    res.append('metodo',req.method);

    res.append('direccion-ip',req.ip);

    res.append('url-original',req.originalUrl);

    res.append('protocolo',req.protocol);
    res.send('holaa')
});

app.get('/setcookie', function (req, res) {

res.cookie("tacan","24");
res.send('Cookie seteada');




});


app.get('/clearcookie', function (req, res) {

    res.clearCookie("tacan");
    res.send("Cookie eliminada");

});





app.listen(8080, function () {
    console.log('Example app listening on port 8080!');
});









