var map;
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