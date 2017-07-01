/**
 * Created by deysitacan on 19/6/17.
 */
module.exports = {
    Welcome: function (req, res) {
        //return response.json({ saludo: "hola" });
        //POST
        //validar que solo se reciba el mensaje
        sails.log.info(req.method);
        if (req.method == "POST") {
            return res.json({ saludo: "hola" });
        }
        else {
            res.send("Error");
        }
        //req.method
    },
    Bienvenido: function (req, res) {
        sails.log.info(req.method);
        //PUT
        if (req.method == "PUT") {
            return res.send("Hola");
        }
        else {
            res.send("Error");
        }
        //return response.send("Hola");
    },
    // / Correr:  http://localhost:1337/Saludo/CrearUsuarioQuemado
    CrearUsuarioQuemado: function (req, res) {
        var parametros = req.allParams();
        var nuevoUsuario = {
            nombre: parametros.nombre,
            apellidos: parametros.apellidos,
            password: parametros.password,
            correo: parametros.correo,
            fechaNacimiento: parametros.fechaNacimiento
        };
        // /Saludo
        //  Nombremodelo.metodo(parametros).exec((err,registro))=>{})
        Usuario.create(nuevoUsuario)
            .exec(function (error, usuarioCreado) {
            if (error) {
                return res.serverError(error);
            }
            else {
                return res.ok(usuarioCreado);
            }
        });
    }
    //crear http://localhost:1337/Saludo/CrearUsuarioQuemado?nombre=Deysi&apellidos=Flores
};
