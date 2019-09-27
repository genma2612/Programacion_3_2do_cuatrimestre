function LoguearUsuario() {
    var user = '{"correo":"' + document.getElementById("correo").value + '","clave":"' + document.getElementById("clave").value + '"}';
    var ajax = new XMLHttpRequest();
    ajax.open("POST", "./BACKEND/admin.php", true);
    ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    ajax.send("usuario=" + user);
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4 && ajax.status == 200) {
            console.log(ajax.responseText);
        }
    };
}
function RegistrarUsuario() {
    //INSTANCIO OBJETO FORMDATA
    var form = new FormData();
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var correo = document.getElementById("correo").value;
    var clave = document.getElementById("clave").value;
    var perfil = document.getElementById("perfil").value;
    //RECUPERO LA IMAGEN SELECCIONADA POR EL USUARIO
    var foto = document.getElementById("foto");
    //AGREGO PARAMETROS AL FORMDATA:
    form.append('nombre', nombre);
    form.append('apellido', apellido);
    form.append('correo', correo);
    form.append('clave', clave);
    form.append('perfil', perfil);
    var ajax = new XMLHttpRequest();
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
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4 && ajax.status == 200) {
            console.log(ajax.responseText);
            var result = JSON.parse(ajax.responseText);
            console.log(result.mensaje);
        }
    };
}
