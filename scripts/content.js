function start() {
	var timeout = setTimeout( function() { start(); }, 1000*4*60); //every 4 minutes
	window.focus();
}
start();
