<?php
//var_dump($_POST);

$objJson = json_decode($_POST["miProducto"]);
$objJson->nombre = "Lapicera modificada";
$objJson->precio = 100;
$objJson->colorTinta = "negra";
echo json_encode($objJson);

//var_dump($objJson);
