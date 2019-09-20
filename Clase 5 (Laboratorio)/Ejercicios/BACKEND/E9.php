<?php

//$autos = json_decode(file_get_contents("../autos.json"));---
//echo json_encode($autos); ---------------------------------- Redundante
//var_dump($autos);
//echo file_get_contents("../autos.json");
/*
$archivo = "../autos.json";
$f = fopen($archivo,"r");
$cadena = fread($f, filesize($archivo));
fclose($f);
echo $cadena;
*/
echo file_get_contents("../autos.json"); //Simplifica lo comentado entre /*
