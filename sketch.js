function setup() {
	// create a place to draw
	createCanvas(640, 360);
	noStroke();
	noLoop();
}

function draw() {
	// clear the background
	var colorSky = color(229, 240, 246);
	fill(colorSky);
	rect(0, 0, 640, 360)



	// DRAW WATER
	var colorWater = color(221, 234, 243);
	fill(colorWater);
	rect(0, 200, 640, 200);


	// DRAW MOUNTAINS
	// background mountains
	var colorBackMountains = color(198, 220, 235);
	fill(colorBackMountains);
	triangle (-100, 200, 90, 80, 400, 200);
	triangle (-60, 200, 30, 70, 300, 200);
	triangle (100, 200, 250, 60, 400, 200);
	triangle (200, 200, 420, 80, 500, 200);
	triangle (200, 200, 420, 80, 500, 200);
	triangle (300, 200, 550, 70, 700, 200);

	// background mountain reflection
	var colorBackMountainsRef = color(202, 220, 232);
	fill(colorBackMountainsRef);
	triangle (-100, 200, 90, 280, 400, 200);
	triangle (-60, 200, 30, 290, 300, 200);
	triangle (100, 200, 250, 300, 400, 200);
	triangle (200, 200, 420, 280, 500, 200);
	triangle (200, 200, 420, 280, 500, 200);
	triangle (300, 200, 550, 290, 700, 200);

	// middle ground mountains
	var colorMidMountains = color(79, 125, 179);
	fill (colorMidMountains);
	triangle (-30, 200, 50, 90, 200, 200);
	triangle (0, 200, 150, 80, 250, 200);
	triangle (250, 200, 350, 80, 400, 200);
	triangle (280, 200, 400, 110, 450, 200);
	triangle (500, 200, 570, 80, 650, 200);
	triangle (500, 200, 570, 80, 650, 200);
	triangle (500, 200, 600, 70, 750, 200);

	// middle ground mountain reflection
	var colorMidMountainsRef = color(136, 176, 211);
	fill (colorMidMountainsRef);
	triangle (-30, 200, 50, 270, 200, 200);
	triangle (0, 200, 150, 280, 250, 200);
	triangle (250, 200, 350, 280, 400, 200);
	triangle (280, 200, 400, 250, 450, 200);
	triangle (500, 200, 570, 280, 650, 200);
	triangle (500, 200, 570, 280, 650, 200);
	triangle (500, 200, 600, 290, 750, 200);

	// foreground mountains
	var colorForeMountains = color(37, 77, 136);
	fill (colorForeMountains);
	triangle (0, 200, 225, 90, 275, 200);
	triangle (200, 200, 275, 100, 350, 200);
	triangle (0, 200, 0, 100, 100, 200);
	triangle (0, 200, 100, 120, 300, 200);
	triangle (410, 200, 450, 110, 510, 200);
	triangle (430, 200, 500, 90, 650, 200);
	triangle (430, 200, 500, 90, 650, 200);
	triangle (500, 200, 600, 120, 700, 200);

	// foreground mountain reflection
		var colorForeMountainsRef = color(96, 141, 180);
	fill (colorForeMountainsRef);
	triangle (0, 200, 225, 270, 275, 200);
	triangle (200, 200, 275, 260, 350, 200);
	triangle (0, 200, 0, 260, 100, 200);
	triangle (0, 200, 100, 240, 300, 200);
	triangle (410, 200, 450, 250, 510, 200);
	triangle (430, 200, 500, 250, 650, 200);
	triangle (430, 200, 500, 270, 650, 200);
	triangle (500, 200, 600, 240, 700, 200);

	// DRAW LAND
	// background land and trees
	// left
	var colorBackLand = color(4, 36, 77);
	fill (colorBackLand);
	triangle (-200, 200, 280, 175, 350, 200);
	triangle (5, 195, 8, 160, 15, 195);
	triangle (18, 195, 24, 150, 30, 195);
	triangle (145, 185, 155, 130, 165, 185);
	triangle (160, 185, 170, 160, 180, 185);
	triangle (270, 185, 275, 150, 280, 185);
	triangle (100, 185, 105, 160, 110, 185);
	// right
	triangle (410, 200, 560, 170, 700, 200);
	triangle (445, 195, 455, 150, 465, 195);

	// foreground land and trees
	var colorForeLand = color(7, 27, 62);
	fill (colorForeLand);
	triangle (410, 320, 560, 270, 700, 320);
	triangle (560, 270, 700, 260, 700, 340);
	triangle (470, 270, 505, 50, 530, 270);
	triangle (550, 250, 605, 20, 650, 250);
	rect(595, 250, 20, 50)
	rect(495, 250, 10, 50)

	// DRAW BOAT
	// body
	var colorBoat = color(247, 61, 62);
	fill (colorBoat);
	arc(320, 240, 80, 80, 0, PI, OPEN);

	var colorBoatRef = color(244, 100, 108);
	fill (colorBoatRef);
	arc(320, 305, 80, 80, PI, PI+PI, OPEN);

	fill (colorBoat);
	rect(300, 263, 40, 10);

	fill (colorWater);
	rect(292, 272, 55, 1);

	// draw mast and sail
	fill (colorBoat);
	rect(330, 180, 5, 70);

	fill (colorBoatRef);
	rect(330, 280, 5, 70);

	var colorSail = color(255, 255, 255);
	fill (colorSail);
	triangle (328, 180, 328, 235, 280, 235);
	triangle (338, 195, 338, 235, 360, 235);

	var colorSailRef = color(242, 242, 242);
	triangle (328, 310, 328, 350, 280, 310);
	triangle (338, 310, 338, 350, 360, 310);








}
