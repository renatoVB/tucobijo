<?php  

	
	$name = $_POST["name"];
	$pass = $_POST["pass"];

	
	$conexion = mysql_connect("mysql.hostinger.es","u873487446_u8734","1234567890q");
	mysql_select_db("u873487446_app",$conexion);

	$sql="INSERT INTO usuario (nombre_usuario, clave_usuario) VALUES ('$name', '$pass')";
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
