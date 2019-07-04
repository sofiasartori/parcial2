<?php
require_once ('AccesoDatos.php');
class Usuario
{
	public $email;
	public $password;
	public $tipo;
	
    public function traerTodosUsuarios(){
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();
		$consulta =$objetoAccesoDato->RetornarConsulta("SELECT * FROM veterinaria.usuarios");
		$consulta->execute();
		

		/*$tabla ='<table style="border:1px solid black;"><tr><th>Sabor</th><th>Tipo</th><th>Kilos</th></tr>';
		while($i=$consulta->fetch()){
			$tabla = $tabla.'<tr><td>'.$i['sabor'].'</td>
					   <td>'.$i['tipo'].'</td>
					   <td>'.$i['kilos'].'</td></tr>';
		}
		$tabla =$tabla.'</table>';
		echo $tabla;*/
		$miArray = Array();
		while($i=$consulta->fetch()){
			array_push($miArray, $i);		
		}
		echo json_encode($miArray);
		
		
	}

	public function insertarUsuario($request){
			$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();
			var_dump($request);
			$itemsUsuario = $objetoAccesoDato->RetornarConsulta("INSERT into veterinaria.usuarios (email, password, tipo) values (:email, :password, :tipo);");
			$itemsUsuario->bindValue(':email', $request['email'], PDO::PARAM_STR);
			$itemsUsuario->bindValue(':password', $request['password'], PDO::PARAM_STR);
			$itemsUsuario->bindValue(':tipo', $request['tipo'], PDO::PARAM_STR);
			$itemsUsuario->execute();
		
	}

	public function borrarUsuario($id){
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("DELETE FROM veterinaria.usuarios where id=$id");
		$consulta->execute();
	}

	public function buscarUsuario($email, $password){
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("SELECT * FROM veterinaria.usuarios where email='$email' AND password='$password'");
		$consulta->execute();
		$usuarioBuscado=$consulta->fetchObject('Usuario');
		return $usuarioBuscado;
	}
}
