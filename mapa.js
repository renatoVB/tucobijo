function buscarme(){
			if (!navigator.geolocation){
		    	alert("Error de gps");
		    	return;
		  	}

			function success(position) {
				var lat  = position.coords.latitude;
			    var lng = position.coords.longitude;
			    var coor = lat+","+lng;

			    dibujarMapa(coor);
			};

			function error() {
			   alert("No se puede encontrar su ubicación");
			};

			navigator.geolocation.getCurrentPosition(success, error);
		}

		function dibujarMapa(pos){

			var yo = new google.maps.MarkerImage('yo.png',
			    new google.maps.Size(30,50), //tamaño icono
			    new google.maps.Point(0,0),
			    new google.maps.Point(20,40)
			);

			$('#mapa').gmap({'center': pos, 'zoom': 15, 'disableDefaultUI':true, 'callback': function() {
					
					//instancia mapa
					var self = this;

					//agrego marcador rojo
					self.addMarker({'position': this.get('map').getCenter(), 'icon': yo, 'title': 'aquí estoy', 'animation': 'bounce'  }).click(function() {
						alert(this.get('map').getCenter());
						self.openInfoWindow({ 'content': 'Ubicación Actual' }, this);
					});	

					//agrego marcador rojo 
				//	self.addMarker({'position': '-33.5170467,-70.7165347'}).click(function() {
				//		self.openInfoWindow({ 'content': 'Hello World!' }, this);
				//	});	
					

			}}); //FIN GMAP
		} //FIN DIBUJARMAPA

		$(document).ready(function() {

		

			$('#buscarme').click(buscarme);

		}); //FIN READY