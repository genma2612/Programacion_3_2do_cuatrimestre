<?php
require_once('AccesoDatos.php');

class Usuario
{
    public $id;
    public $nombre;
    public $apellido;
    public $correo;
    public $clave;
    public $perfil;
    public $estado;
    public $foto;
    
    public function __construct($nombre,$apellido,$correo,$clave,$perfil,$estado,$foto)
    {
        $this->nombre = $nombre;
        $this->apellido = $apellido;
        $this->correo = $correo;
        $this->clave = $clave;
        $this->perfil = $perfil;
        $this->estado = $estado;
        $this->foto = $foto;
    }

    public function ToJson()
    {
        return json_encode($this);
    }

    public static function CorreoExiste($correo)
    {
        $retorno = false;
        $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
        $consulta =$objetoAccesoDato->RetornarConsulta("SELECT * from usuarios WHERE correo = :correo"); 
        $consulta->bindValue(':correo', $correo, PDO::PARAM_STR);
        $consulta->execute();
        if($consulta->rowCount() > 0)
            $retorno = true;
        return $retorno;
    }

    public static function Existe($correo, $clave)
    {
        $retorno = false;
        $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
        $consulta =$objetoAccesoDato->RetornarConsulta("SELECT * from usuarios WHERE correo = :correo AND clave = :clave"); 
        $consulta->bindValue(':correo', $correo, PDO::PARAM_STR);
        $consulta->bindValue(':clave', $clave, PDO::PARAM_STR);
        $consulta->execute();
        if($consulta->rowCount() > 0)
            $retorno = true;
        return $retorno;
    }

    public function Agregar()
    {
        $retorno = false;
        if(!Usuario::CorreoExiste($this->correo))
        {
            $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
            $consulta =$objetoAccesoDato->RetornarConsulta("INSERT INTO usuarios (nombre, apellido, correo, clave, perfil, estado, foto)"
                                                        . "VALUES(:nombre, :apellido, :correo, :clave, :perfil, :estado, :foto)"); 
            $consulta->bindValue(':nombre', $this->nombre, PDO::PARAM_STR);
            $consulta->bindValue(':apellido', $this->apellido, PDO::PARAM_STR);
            $consulta->bindValue(':correo', $this->correo, PDO::PARAM_STR);
            $consulta->bindValue(':clave', $this->clave, PDO::PARAM_STR);
            $consulta->bindValue(':perfil', $this->perfil, PDO::PARAM_STR);
            $consulta->bindValue(':estado', $this->estado, PDO::PARAM_STR);
            $consulta->bindValue(':foto', $this->foto, PDO::PARAM_STR);
            $consulta->execute();
            if($consulta->rowCount() > 0)
                $retorno = true;
        }
        return $retorno;
    }

    public static function Traer()
    {
        $usuarios = array();
        $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
        $consulta =$objetoAccesoDato->RetornarConsulta("SELECT * FROM usuarios");
        $consulta->execute(); 
        $resultado = $consulta->fetchall();
		foreach ($resultado as $fila) {
                $user = new Usuario($fila[1],$fila[2],$fila[3],$fila[4],$fila[5],$fila[6]);
                array_push($usuarios, $user);
            }            
        return $usuarios;    
    }

    public function CalcularIVA()
    {
        return ($this->precio * 1.21);
    }
    /*
    public function Modificar()
    {
        try
        {
            $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
            $consulta =$objetoAccesoDato->RetornarConsulta("UPDATE usuarios SET precio = :precio, foto = :foto WHERE tipo = :tipo AND pais = :pais"); 
            $consulta->bindValue(':tipo', $this->tipo, PDO::PARAM_STR);
            $consulta->bindValue(':pais', $this->paisOrigen, PDO::PARAM_STR);
            $consulta->bindValue(':precio', $this->precio, PDO::PARAM_STR);
            $consulta->bindValue(':foto', $this->path, PDO::PARAM_STR);
            $consulta->execute();
            return true;
        }
        catch (PDOException $e)
        {
            return false;
        }
    }
    */
    public function Eliminar()
    {
        try
        {
            $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
            $consulta =$objetoAccesoDato->RetornarConsulta("DELETE from usuarios WHERE tipo = :tipo AND pais = :pais"); 
            $consulta->bindValue(':tipo', $this->tipo, PDO::PARAM_STR);
            $consulta->bindValue(':pais', $this->paisOrigen, PDO::PARAM_STR);
            $consulta->execute();
            return true;
        }
        catch (PDOException $e)
        {
            return false;
        }
    }
}