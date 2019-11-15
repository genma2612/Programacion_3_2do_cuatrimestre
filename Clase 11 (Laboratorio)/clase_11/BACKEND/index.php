<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;
use Firebase\JWT\JWT;
require_once './vendor/autoload.php';

$config['displayErrorDetails'] = true;
$config['addContentLengthHeader'] = false;
/*
¡La primera línea es la más importante! A su vez en el modo de 
desarrollo para obtener información sobre los errores
 (sin él, Slim por lo menos registrar los errores por lo que si está utilizando
  el construido en PHP webserver, entonces usted verá en la salida de la consola 
  que es útil).
  La segunda línea permite al servidor web establecer el encabezado Content-Length, 
  lo que hace que Slim se comporte de manera más predecible.
*/
$app = new \Slim\App(["settings" => $config]); 

$app->group('/login', function () {
        $this->post('/', function (Request $request, Response $response, $args){

        $datos = $request->getParsedBody();
        $ahora = time();

        $payload = array(
            'iat' => $ahora,            //CUANDO SE CREO EL JWT (OPCIONAL)
            //'exp' => $ahora + (30),     //INDICA EL TIEMPO DE VENCIMIENTO DEL JWT (OPCIONAL)
            'data' => $datos,           //DATOS DEL JWT
            'app' => "API REST 2019"    //INFO DE LA APLICACION (PROPIO)
        );
        $token = JWT::encode($payload, "miClaveSecreta");

        $retorno = new stdClass();
        $retorno->exito = true;
        $retorno->JWT = $token;
        //var_dump($retorno);
        return $response->with_json($retorno,200);
    });
 
    //$this->get('/', \Usuario::class .'::VerificarJWTAPI');
    $this->get('/', var_dump("ASDF")
    ); 

});

$app->run();