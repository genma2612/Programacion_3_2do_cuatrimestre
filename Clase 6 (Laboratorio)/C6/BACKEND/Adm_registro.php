<?php
require_once('Usuario.php');
date_default_timezone_set('America/Argentina/Buenos_Aires'); 

$retorno = new stdClass();
$retorno->exito = false;
$retorno->mensaje = "No se pudo registrar el usuario";

$nombre = $_POST["nombre"];
$apellido = $_POST["apellido"];
$correo = $_POST["correo"];
$clave = $_POST["clave"];
$perfil = $_POST["perfil"];
$estado = 1;

$time = date("His");
$extension = pathinfo($_FILES["foto"]["name"], PATHINFO_EXTENSION);
$path = "./fotos/" . $nombre . "." . $apellido . "." . $time . "." . $extension;

$user = new Usuario($nombre,$apellido,$correo,$clave,$perfil,$estado,$path);

if($user->Agregar())
{
    move_uploaded_file($_FILES["foto"]["tmp_name"], $path);
    $retorno->mensaje = "Usuario registrado";
    $retorno->exito = true;
}

echo json_encode($retorno);

