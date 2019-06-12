var CANVAS_WIDTH = 480;
var CANVAS_HEIGHT = 320;

var canvasElement = $("<canvas width='" + CANVAS_WIDTH + "' height='" + CANVAS_HEIGHT + "'></canvas>");
var canvas = canvas.get(0).getContext("2d");
canvasElement.appendTo("body");

function update()
{
}

function draw()
{
	canvas.fillStyle = "#000000";
	canvas.fillText("Hello", 50, 50);
}

var FPS = 30;
setInterval(function() {
	update();
	draw();
}, 1000/FPS);
