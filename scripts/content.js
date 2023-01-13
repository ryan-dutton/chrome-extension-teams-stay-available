function start() {
	var timeout = setTimeout( function() { start(); }, 10000);
	window.focus();
}
start();
