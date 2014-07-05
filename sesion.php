<?php
	
	$nombre = $_POST['nombre'];
	$clave= $_POST['clave'];


	$conexion = mysql_connect("mysql.hostinger.es","u873487446_u8734","1234567890q");
	mysql_select_db("u873487446_app",$conexion);

	$sql = "select * from usuario where nombre_usuario = '$nombre' and clave_usuario = '$clave'";

	$res=mysql_query($sql,$conexion);
    if($arreglo=mysql_fetch_array($res))
      {     
      	$json=array('id_usuario' => $arreglo[0],'nombre_usuario' => $arreglo[1], 'mensaje' => "true");
    	echo json_encode($json);
	  }else{
		$json=array('id_usuario' => $arreglo[0],'nombre_usuario' => $arreglo[1], 'mensaje' => "false");
		echo json_encode($json);
	  }
    mysql_close($conexion);
	
?>