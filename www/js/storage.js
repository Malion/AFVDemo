//Create DB
var dbShell = window.openDatabase("gameReviews", "1.0", "Game Reviews", 1000000);
dbShell;
//Wait for Device Ready
document.addEventListener("deviceready", onDeviceReady, false);
//Open Database
function onDeviceReady(){
	var db = window.openDatabase("gameReviews", "1.0", "Game Reviews", 1000000)	
};