$(document).ready(function() {
	$("#BtnEntrar").click(function(){

		var parametros = {
			nombre: $("#nombre").val(),
			clave: $("#clave").val()
		};
		
		$.ajax({
			url: 'http://alojos.esy.es/sesion.php',
			type: 'post',
			data: parametros,
			error: function(){
				//sucede un error
				$("#error").html("Oops! ocurrió un error....");
			},
			beforeSend: function(){
				//antes que se complete el php
				$.mobile.loading('show');
			},
			success: function(res){
				
				//completó el php
				$.mobile.loading('hide');
					var objeto = jQuery.parseJSON(res);

       			if(objeto.mensaje === "true")
        		{ 
        			
          			$('#nom').html(objeto.nombre_usuario);
          			$('#nom2').html(objeto.nombre_usuario);
          			$('#nom3').html(objeto.nombre_usuario);
          			$('#id_usu').val(objeto.id_usuario);
          			$('#id_mensaje').val(objeto.id_usuario);
          			alert("Sesion exitosa");	
					//$("#resultado").html(datos);	
					$.mobile.changePage( "#page-2", { transition: "slideup", changeHash: false });		
				}							
				else
				{
					alert("Error de sesion");
				}
			}

		});

	});
			
});