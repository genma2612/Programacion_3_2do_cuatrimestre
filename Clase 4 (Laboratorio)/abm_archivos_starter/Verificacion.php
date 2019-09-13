<?php
session_start();

if($_SESSION["usuario"] == "ok")
{
    var_dump($_SESSION);
    echo "ok";
}
else
{
    header("location: login.php");
}