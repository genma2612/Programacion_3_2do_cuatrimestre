window.onload = function () {
    Test();
};

function Test():void
    {
        let xm = new XMLHttpRequest();
        xm.open("GET", "./BACKEND/Test.php", true);
        xm.send();
        xm.onreadystatechange = () => 
        {
            if (xm.readyState == 4 && xm.status == 200) 
            {
                console.log(xm.responseText);
                //alert(xm.responseText);
            }
        }
    }

    function TestParams():void
    {
        let xm = new XMLHttpRequest();
        let nombre = (<HTMLTextAreaElement> document.getElementById("param")).value;
        xm.open("GET", "./BACKEND/Test_Params.php?nombre=" + nombre, true);
        xm.send();
        xm.onreadystatechange = () => 
        {
            if (xm.readyState == 4 && xm.status == 200) 
            {
                console.log(xm.responseText);
                //alert(xm.responseText);
            }
        }
    }