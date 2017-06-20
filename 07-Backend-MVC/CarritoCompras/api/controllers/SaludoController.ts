/**
 * Created by deysitacan on 19/6/17.
 */

declare var exports;
declare var module;
declare var sails;
module.exports = {
  Welcome: function (req, res) {
    //return response.json({ saludo: "hola" });

    //POST

    //validar que solo se reciba el mensaje

    sails.log.info(req.method);

    if(req.method=="POST"){
      return res.json({ saludo: "hola" });

    }else{

      res.send("Error");
    }


      //req.method

  },

  Bienvenido: function (req, res) {

    sails.log.info(req.method);

    //PUT
    if(req.method=="PUT"){
      return res.send("Hola");

    }else{

      res.send("Error");
    }



    //return response.send("Hola");
  }




};

