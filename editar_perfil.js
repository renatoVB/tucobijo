$(document).ready(function() {
	$("#BtnRellenar").click(function(){

		var parametros = {
			apellido: $("#apellido").val(),
			correo: $("#correo").val(),
			sexo: $("input[name='sexo']:checked").val(),
			id_usu : $("#id_usu").val()


		};
		
		$.ajax({
			url: 'http://alojos.esy.es/editar_perfil.php',
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
				if(res=="true")
				{
					alert("Registrado Correctamente");				
				}							
				else
				{
					alert(res);
					alert("Error de registro");
				}
			}

		});

	});
			
});