<?php
require_once ('AccesoDatos.php');
class Turno
{
	public $dia;
	public $hora;
	
	
    public function traerTodosTurnos(){
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();
		$consulta =$objetoAccesoDato->RetornarConsulta("SELECT * FROM veterinaria.turnos");
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

	public function insertarTurno($request){
			$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();
			var_dump($request);
			$itemsTurno = $objetoAccesoDato->RetornarConsulta("INSERT into veterinaria.turnos (dia, hora) values (:dia, :hora);");
			$itemsTurno->bindValue(':dia', $request['dia'], PDO::PARAM_STR);
			$itemsTurno->bindValue(':hora', $request['hora'], PDO::PARAM_STR);
			$itemsTurno->execute();
		
	}

}