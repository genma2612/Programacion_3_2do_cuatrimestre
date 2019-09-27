<?php
require_once('Usuario.php');

if(isset($_POST["usuario"]) ? $_POST["usuario"] : null)
{
    $obj = json_decode($_POST["usuario"]);
    //var_dump($obj);
    $retorno = new stdClass();
    $retorno->exito = Usuario::Existe($obj->correo, $obj->clave);
    echo json_encode($retorno);
}
