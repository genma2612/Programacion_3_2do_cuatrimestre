"use strict";
/// <reference path="./empleado.ts" />
var Empleados;
(function (Empleados) {
    var Fabrica = /** @class */ (function () {
        function Fabrica(razonSocial) {
            this._razonSocial = razonSocial;
            this._empleados = Array();
        }
        Fabrica.prototype.AgregarEmpleado = function (persona) {
            var retorno = false;
            if (!this.BuscarEmpleado(persona)) {
                this._empleados.push(persona);
                retorno = true;
            }
            return retorno;
        };
        Fabrica.prototype.EliminarEmpleado = function (persona) {
            var retorno = false;
            if (this.BuscarEmpleado(persona)) {
            }
            return retorno;
        };
        Fabrica.prototype.BuscarEmpleado = function (persona) {
            var existe = false;
            for (var index = 0; index < this._empleados.length; index++) {
                if (this._empleados[index].Legajo == persona.Legajo) {
                    existe = true;
                    break;
                }
            }
            return existe;
        };
        Fabrica.prototype.ToString = function () {
            var empleados = "";
            for (var index = 0; index < this._empleados.length; index++) {
                empleados += this._empleados[index].ToString() + "\r\n";
            }
            return empleados;
        };
        return Fabrica;
    }());
    Empleados.Fabrica = Fabrica;
})(Empleados || (Empleados = {}));
//# sourceMappingURL=fabrica.js.map