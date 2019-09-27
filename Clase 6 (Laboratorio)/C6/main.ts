function LoguearUsuario()
{

    let user = '{"correo":"' + (<HTMLInputElement> document.getElementById("correo")).value + '","clave":"' + (<HTMLInputElement> document.getElementById("clave")).value + '"}';
    var ajax = new XMLHttpRequest();
    ajax.open("POST", "./BACKEND/admin.php",true);
    ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    ajax.send("usuario=" + user);
    ajax.onreadystatechange = () => 
    {
        if (ajax.readyState == 4 && ajax.status == 200) 
        {
            console.log(ajax.responseText);
        }
    }

}

function RegistrarUsuario()
{
    //INSTANCIO OBJETO FORMDATA
    let form : FormData = new FormData();

    let nombre = (<HTMLInputElement> document.getElementById("nombre")).value;
    let apellido = (<HTMLInputElement> document.getElementById("apellido")).value;
    let correo = (<HTMLInputElement> document.getElementById("correo")).value;
    let clave = (<HTMLInputElement> document.getElementById("clave")).value;
    let perfil = (<HTMLInputElement> document.getElementById("perfil")).value;

    //RECUPERO LA IMAGEN SELECCIONADA POR EL USUARIO
    let foto : any = (<HTMLInputElement> document.getElementById("foto"));

    //AGREGO PARAMETROS AL FORMDATA:
    form.append('nombre', nombre);
    form.append('apellido', apellido);
    form.append('correo', correo);
    form.append('clave', clave);
    form.append('perfil', perfil);
    let ajax : XMLHttpRequest = new XMLHttpRequest();

    //PARAMETRO RECUPERADO POR $_FILES
    form.append('foto', foto.files[0]);

    //PARAMETRO RECUPERADO POR $_POST O $_GET (SEGUN CORRESPONDA)
    //form.append('op', "subirFoto");

    //METODO; URL; ASINCRONICO?
    ajax.open('POST', './BACKEND/Adm_registro.php', true);

    //ESTABLEZCO EL ENCABEZADO DE LA PETICION
    ajax.setRequestHeader("enctype", "multipart/form-data");

    //ENVIO DE LA PETICION
    ajax.send(form);
    ajax.onreadystatechange = () => 
    {
        if (ajax.readyState == 4 && ajax.status == 200) 
        {
            console.log(ajax.responseText);
            let result = JSON.parse(ajax.responseText);
            console.log(result.mensaje);
        }
    }
}