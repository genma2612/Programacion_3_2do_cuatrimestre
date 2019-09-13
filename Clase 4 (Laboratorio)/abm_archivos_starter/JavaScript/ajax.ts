window.onload = function () {
    let xm = new XMLHttpRequest();
    xm.open("GET", "Verificacion.php", true);
    xm.send();
    xm.onreadystatechange = () => 
    {
        if (xm.readyState == 4 && xm.status == 200) 
        {
            if(xm.responseText == "ok")
            {
                MostrarGrilla();
            }
            else
            {
                window.location.href = "login.php";
            }
        }
    }
};

function MostrarGrilla():void
    {
        let xm = new XMLHttpRequest();
        xm.open("POST", "administracion.php", true);
        xm.setRequestHeader("content-type","application/x-www-form-urlencoded");
        xm.send("queHago=mostrarGrilla");
        xm.onreadystatechange = () => 
        {
            if (xm.readyState == 4 && xm.status == 200) 
            {
                //console.log(xm.responseText);
                (<HTMLDivElement> document.getElementById("divGrilla")).innerHTML = xm.responseText;
            }
        }
    }