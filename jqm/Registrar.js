$(document).ready(function() {
	$("#BtnRegistrar").click(function(){

		var parametros = {
			name: $("#name").val(),
			pass: $("#pass").val()
		};
		
		$.ajax({
			url: 'http://alojos.esy.es/registrar.php',
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
					alert("Error de registro");
				}
			}

		});

	});
			
});