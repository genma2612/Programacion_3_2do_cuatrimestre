<?php
$nombre = $_GET["nombre"];
if(strlen($nombre) == 0)
{
    echo ":(";
}
else
{
    echo "Hola " . $nombre;
}