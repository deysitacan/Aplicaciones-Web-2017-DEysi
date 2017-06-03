/**
 * Created by deysitacan on 3/6/17.
 */
class usuarioClass{

    public nombre:string;//se puede omitir
    private apellido:string;//se puede omitir

    constructor(
        public nombre:string,
        private apellido?:string){

        this.nombre=nombre;
        this.apellido=apellido;
        //las variables vacias se ponen al final
    }

  ImprimirNombre(saludo:string,titulo?:string):string{
return `
      ${saludo}${titulo}
      ${this.nombre}${this.apellido}

`;
  }
}
      let Deysi:usuarioClass=new usuarioClass(

          "Deysi",
          "Tacan");

      console.log(Deysi.ImprimirNombre("Hi","Sr."));