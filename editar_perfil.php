<?php  

	
	$apellido = $_POST["apellido"];
	$correo = $_POST["correo"];
	$sexo = $_POST["sexo"];
	$id_usu = $_POST["id_usu"];


	$conexion = mysql_connect("mysql.hostinger.es","u873487446_u8734","1234567890q");
	mysql_select_db("u873487446_app",$conexion);
	$sql="UPDATE usuario SET id_usuario = '$id_usu', apellido_usuario='$apellido', correo_usuario= '$correo', sexo_usuario= '$sexo' WHERE id_usuario = '$id_usu' ";
	$res=mysql_query($sql,$conexion);
	if(mysql_affected_rows()>0){

		echo "true";
	}
	else
	{
		
		echo "false";
	}

	mysql_close($conexion);
	
?>
