if(localStorage.getItem("Empleados") == null)
{
    localStorage.setItem("Empleados", "juan-123,rosa-456,carlos-789");
}

var arrayEmpleados = Array();

function Loguear():void {
    let mensaje = "Error: No se encuentra el usuario";
    let nombre : string = (<HTMLInputElement> document.getElementById("txtNombre")).value;
    let legajo : number = parseInt((<HTMLInputElement> document.getElementById("txtLegajo")).value);
    let cadenaEmpleados = localStorage.getItem("Empleados");
    if(cadenaEmpleados != null)
    {
        arrayEmpleados = cadenaEmpleados.split(",");
        for (let index = 0; index < arrayEmpleados.length; index++) {
            let temp = arrayEmpleados[index].split("-");
            if(temp[0] == nombre && temp[1] == legajo)
            {
                mensaje = "Usuario " + nombre + " encontrado y logueado";
                window.location.href = "./Principal.html";
                break;
            }
        }
        console.log(mensaje);
    }
}