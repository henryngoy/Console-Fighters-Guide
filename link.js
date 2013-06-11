// JavaScript Document

document.addEventListener("deviceReady", onDeviceReady, false);

function onDeviceReady() {
	$('#charactermoves').click(function() {
		window.open(encodeURI('http://www.leedberg.com/mk/mk2/moves.htm'), '_blank', 'location=yes');
	});
	
	$('#charactersoundbites').click(function() {
		window.open(encodeURI('http://www.leedberg.com/mk/vault/vault2.htm'), '_blank', 'location=yes');
	});
	
	$('#characterbios').click(function() {
		window.open(encodeURI('http://www.mksecrets.net/mk2/eng/mk2-bios.php'), '_blank', 'location=yes');
	});
	
}