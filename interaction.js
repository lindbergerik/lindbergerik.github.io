//allting är direktkopplat (inte som MVC), därför kan vi accessa "map" och "marker" direkt här

function zoomOut() {
	map.setZoom(map.zoom - 1);
}

function zoomIn() {
	map.setZoom(map.zoom + 1);
}

var startX = 0;
var startY = 0;

function startPan(event) {
	startX = event.clientX;     // Get the horizontal coordinate
	startY = event.clientY;     // Get the vertical coordinate
	console.log("X coords: " + startX + ", Y coords: " + startY);
}

function stopPan(event) {
	var distX = startX - event.clientX;
	var distY = startY - event.clientY;
	map.panBy(distX, distY);	//pannar automatiskt genom skillnad i X och Y värdena
	console.log("X coords: " + distX + ", Y coords: " + distY);
}

function toggleFullScreen() {
  var doc = window.document;
  var docEl = doc.documentElement;

  var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
  var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

  if(!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
    requestFullScreen.call(docEl);
  }
  else {
    cancelFullScreen.call(doc);
  }
}

// var coordinates = {lat: 0, lng: 0};
// function placeMarker(event) {
// 	var coordinates = {lat: event.clientX, lng: event.clientY};
// 	map.marker.position=coordinates;
// 	//map.marker.setMap(map);
// 	//PLACE MARKER
// }