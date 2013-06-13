// JavaScript Document

document.addEventListener("deviceready", onDeviceReady, false);

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
	
	$('#mk2vid1').click(function() {
		window.open(encodeURI('Images/Video /Mortal_Kombat_II_Fatalities.mp4'), '_blank', 'location=yes');
	});
	
}

function onDeviceReady() {
	$('#kicharactermoves').click(function() {
		window.open(encodeURI('http://killerinstinct.gamebub.com/characters.php'), '_blank', 'location=yes');
	});
	
}

