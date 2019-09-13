"use strict";
window.onload = function () {
    Test();
};
function Test() {
    var xm = new XMLHttpRequest();
    xm.open("GET", "./BACKEND/Test.php", true);
    xm.send();
    xm.onreadystatechange = function () {
        if (xm.readyState == 4 && xm.status == 200) {
            console.log(xm.responseText);
            //alert(xm.responseText);
        }
    };
}
function TestParams() {
    var xm = new XMLHttpRequest();
    var nombre = document.getElementById("param").value;
    xm.open("GET", "./BACKEND/Test_Params.php?nombre=" + nombre, true);
    xm.send();
    xm.onreadystatechange = function () {
        if (xm.readyState == 4 && xm.status == 200) {
            console.log(xm.responseText);
            //alert(xm.responseText);
        }
    };
}
//# sourceMappingURL=test_ajax.js.map