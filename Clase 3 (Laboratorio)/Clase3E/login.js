"use strict";
if (localStorage.getItem("Empleados") == null) {
    localStorage.setItem("Empleados", "juan-123,rosa-456,carlos-789");
}
var arrayEmpleados = Array();
function Loguear() {
    var mensaje = "Error: No se encuentra el usuario";
    var nombre = document.getElementById("txtNombre").value;
    var legajo = parseInt(document.getElementById("txtLegajo").value);
    var cadenaEmpleados = localStorage.getItem("Empleados");
    if (cadenaEmpleados != null) {
        arrayEmpleados = cadenaEmpleados.split(",");
        for (var index = 0; index < arrayEmpleados.length; index++) {
            var temp = arrayEmpleados[index].split("-");
            if (temp[0] == nombre && temp[1] == legajo) {
                mensaje = "Usuario " + nombre + " encontrado y logueado";
                window.location.href = "./Principal.html";
                break;
            }
        }
        console.log(mensaje);
    }
}
//# sourceMappingURL=login.js.map