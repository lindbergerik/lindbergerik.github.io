var map, infowindow;
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 59.336559, lng: 18.062660},
		zoom: 20,
		mapTypeId: 'satellite',
		tilt: 45,
		disableDefaultUI: true,
		zoomcontrol: false,
		draggable: false
	});

	var coordinates = {lat: 59.336559, lng: 18.062660};
	this.marker1 = new google.maps.Marker( {
		position: coordinates,
		map: map,
		draggable: true,
		animation: google.maps.Animation.DROP,
		title: 'Hello World!'
	});

	this.marker2 = new google.maps.Marker( {
		position: {lat: 59.336660, lng: 18.062458},
		map: map,
		animation: google.maps.Animation.BOUNCE,
		title: 'HOLA'
	});
}

function geoLocation() {
	//GEOLOCATION
	infoWindow = new google.maps.InfoWindow;
	// Try HTML5 geolocation.
	if (navigator.geolocation) {
	    navigator.geolocation.getCurrentPosition(function(position) {
	    	var pos = {
	        	lat: position.coords.latitude,
	        	lng: position.coords.longitude
	    	};

	        infoWindow.setPosition(pos);
	        infoWindow.setContent('Location found.');
	        infoWindow.open(map);
	        map.setCenter(pos);
	    }, function() {
	    	handleLocationError(true, infoWindow, map.getCenter());
		});
	} else {
		// Browser doesn't support Geolocation
		handleLocationError(false, infoWindow, map.getCenter());
	}
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
  infoWindow.open(map);
}

function goThere1() {
	map.setCenter({lat: 59.336559, lng: 18.062660});
}