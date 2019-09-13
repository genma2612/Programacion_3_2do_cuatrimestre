"use strict";
window.onload = function () {
    var xm = new XMLHttpRequest();
    xm.open("GET", "Verificacion.php", true);
    xm.send();
    xm.onreadystatechange = function () {
        if (xm.readyState == 4 && xm.status == 200) {
            if (xm.responseText == "ok") {
                MostrarGrilla();
            }
            else {
                window.location.href = "login.php";
            }
        }
    };
};
function MostrarGrilla() {
    var xm = new XMLHttpRequest();
    xm.open("POST", "administracion.php", true);
    xm.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    xm.send("queHago=mostrarGrilla");
    xm.onreadystatechange = function () {
        if (xm.readyState == 4 && xm.status == 200) {
            //console.log(xm.responseText);
            document.getElementById("divGrilla").innerHTML = xm.responseText;
        }
    };
}
