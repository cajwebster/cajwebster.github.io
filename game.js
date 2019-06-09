var canvas = document.getElementById("maincanvas");
canvas.addEventListener("mousedown", onclick);
canvas.addEventListener("mousemove", mousemove);
canvas.addEventListener("ontouchstart", onTouch);
var ctx = canvas.getContext("2d");

function alphaToColor(alpha)
{
	return "#" + alpha.toString(16) + alpha.toString(16) + alpha.toString(16);
}

function refreshCanvas()
{
	ctx.canvas.width = window.innerWidth - 20;
	ctx.canvas.height = window.innerHeight - 20;
	ctx.fillStyle = "#000000";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function mousemove(e)
{
	mousePos.x = e.clientX - canvas.width/2;
	mousePos.y = e.clientY - canvas.height/2;
	console.log(mousePos);
}

function onclick(e)
{
	if (buttonHovered) location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
}

function onTouch(e)
{
	var touchPos = {x: e.touches[0].clientX, y: e.touches[0].clientY};
	if (touchPos.x > buttonTopLeft.x && touchPos.x < buttonBottomRight.x &&
		touchPos.y > buttonTopLeft.y && touchPos.y < buttonBottomRight.y) location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
}

var buttonTopLeft = {x: -50, y: 40};
var buttonBottomRight = {x: 85, y: 90};
var mousePos = {x: 0, y: 0};
var textAlpha = 16;
var buttonAlpha = 16;
var buttonHovered = false;

function increaseAlpha()
{
	if (textAlpha < 255) textAlpha++;
	else if (buttonAlpha < 255) buttonAlpha++;
}

function render()
{
	increaseAlpha();
	refreshCanvas();

	ctx.fillStyle = alphaToColor(textAlpha);
	ctx.font = "30pt Comic Sans MS";
	ctx.textAlign = "center";
	ctx.fillText("A small browser game", canvas.width/2, canvas.height/2);

	if (buttonAlpha > 16)
	{
		ctx.beginPath();
		ctx.arc(canvas.width/2 - 50, canvas.height/2 + 50, 25, 0.5*Math.PI, -0.5*Math.PI);
		ctx.lineTo(canvas.width/2 + 50, canvas.height/2 + 25);
		ctx.arc(canvas.width/2 + 50, canvas.height/2 + 50, 25, -0.5*Math.PI, 0.5*Math.PI);
		ctx.lineTo(canvas.width/2 - 50, canvas.height/2 + 75);
		ctx.fillStyle = alphaToColor(buttonAlpha);
		ctx.fill();

		ctx.fillStyle = "#000000";
		ctx.font = "19pt Comic Sans MS";
		ctx.textAlign = "center";
		ctx.fillText("Click to start", canvas.width/2, canvas.height/2 + 60);

		if (mousePos.x > buttonTopLeft.x && mousePos.x < buttonBottomRight.x &&
			mousePos.y > buttonTopLeft.y && mousePos.y < buttonBottomRight.y)
		{
			buttonHovered = true;
			canvas.style.cursor = "pointer";
		} else {
			buttonHovered = false;
			canvas.style.cursor = "";
		}
	}
}

setInterval(render, 10);

/*refreshCanvas();
var color = "#ffffff";
console.log(color);
ctx.fillStyle = color;
ctx.font = "300px Arial";
ctx.fillText("This is some text", 0, 200);*/