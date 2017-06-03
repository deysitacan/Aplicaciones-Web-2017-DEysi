/**
 * Created by deysitacan on 3/6/17.
 */
var usuarioClass = (function () {
    /* public nombre:string;//se puede omitir
     private apellido:string;//se puede omitir
 */
    function usuarioClass(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
        /*  this.nombre=nombre;
          this.apellido=apellido;
          //las variables vacias se ponen al final
          */
    }
    usuarioClass.prototype.ImprimirNombre = function (saludo, titulo) {
        return "\n      " + saludo + titulo + "\n      " + this.nombre + this.apellido + "\n\n";
    };
    return usuarioClass;
}());
var Deysi = new usuarioClass("Deysi", "Tacan");
console.log(Deysi.ImprimirNombre("Hi  ", "Sr."));
