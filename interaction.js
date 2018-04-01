//allting är direktkopplat (inte som MVC), därför kan vi accessa "map" och "marker" direkt här

function zoomOut() {
	map.setZoom(map.zoom - 1);
}

function zoomIn() {
	map.setZoom(map.zoom + 1);
}

var coords = {lat: 0, lng: 0};

function panLeft() {
  coords = map.getCenter();
  map.setCenter({lat: coords.lat(), lng: coords.lng()-0.001});
}

function panUp() {
  coords = map.getCenter();
  map.setCenter({lat: coords.lat()+0.001, lng: coords.lng()});
}

function panDown() {
  coords = map.getCenter();
  map.setCenter({lat: coords.lat()-0.001, lng: coords.lng()});
}

function panRight() {
  coords = map.getCenter();
  map.setCenter({lat: coords.lat(), lng: coords.lng()+0.001});
}

// Panning by drag
// var startX = 0;
// var startY = 0;
// function startPan(event) {
// 	startX = event.clientX;     // Get the horizontal coordinate
// 	startY = event.clientY;     // Get the vertical coordinate
// 	console.log("X coords: " + startX + ", Y coords: " + startY);
// }
// function stopPan(event) {
// 	var distX = startX - event.clientX;
// 	var distY = startY - event.clientY;
// 	map.panBy(distX, distY);	//pannar automatiskt genom skillnad i X och Y värdena
// 	console.log("X coords: " + distX + ", Y coords: " + distY);
// }

