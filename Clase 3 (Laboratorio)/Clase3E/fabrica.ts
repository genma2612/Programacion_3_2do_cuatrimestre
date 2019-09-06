/// <reference path="./empleado.ts" />

namespace Empleados {

    export class Fabrica {

        protected _empleados:Empleados.Empleado[];
        protected _razonSocial:string;

        public constructor(razonSocial:string){
            this._razonSocial = razonSocial;
            this._empleados = Array();
        }

        public AgregarEmpleado(persona:Empleado):boolean{
            let retorno = false;
            if(!this.BuscarEmpleado(persona)) //Entra si el empleado no existe en el array
            {
                this._empleados.push(persona);
                retorno = true;
            }
            return retorno;
        }

        public EliminarEmpleado(persona:Empleado):boolean{
            let retorno = false;
            if(this.BuscarEmpleado(persona)) //Entra si el empleado existe en el array
            {
                
            }
            return retorno;
        }

        private BuscarEmpleado(persona:Empleado):boolean{
            let existe = false;
            for (let index = 0; index < this._empleados.length; index++) {
                if(this._empleados[index].Legajo == persona.Legajo)
                {
                    existe = true;
                    break;
                }
            }
            return existe;
        }

        public ToString():string{
            let empleados = "";
            for (let index = 0; index < this._empleados.length; index++) {
                empleados += this._empleados[index].ToString() + "\r\n";
            }
            return empleados;
        }
    }

}