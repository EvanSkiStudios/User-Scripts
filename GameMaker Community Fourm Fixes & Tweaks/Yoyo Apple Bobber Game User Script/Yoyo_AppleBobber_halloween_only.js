// Script Made by Evanski (C) 2023
// Game by YoYoGames

function halloween(){
	const gameIframe = document.createElement('iframe');
	gameIframe.src = 'https://gamestrips.yoyogames.com/AppleBobber/index.html';
	gameIframe.width = '100%';
	gameIframe.height = '100%';
	gameIframe.frameBorder = '0';
	header.appendChild(gameIframe);
}

window.onload = function() {
    var currentDate = new Date();
    var startDateTime = new Date(currentDate.getFullYear(), 9, 29);
    var endDateTime = new Date(currentDate.getFullYear(), 10, 2);
    if (currentDate >= startDateTime && currentDate <= endDateTime) {
        halloween();
    }
};