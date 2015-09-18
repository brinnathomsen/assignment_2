function setup() {
	// create a place to draw
	createCanvas(640, 360);
	noStroke();
	noLoop();
}

function draw() {

	var weather = random(100);

	// DRAW SKY AND WATER
	if (weather > 80) {
		// Dreery Scene
		var colorDreerySky = color(229, 240, 246);
		fill(colorDreerySky);
		rect(0, 0, 640, 360);

		var colorDreeryWater = color(221, 234, 243);
		fill(colorDreeryWater);
		rect(0, 200, 640, 200);}


	else if (weather > 60) {
		// Sunny Scene
		var colorSunnySky = color(220, 245, 249);
		fill(colorSunnySky);
		rect(0, 0, 640, 360);

		var colorSunnyWater = color(142, 184, 220);
		fill(colorSunnyWater);
		rect(0, 200, 640, 200);}

	else if (weather > 40) {
		// Sunset Scene
		var colorSunsetSky = color(242, 177, 145);
		fill(colorSunsetSky);
		rect(0, 0, 640, 360);

		var colorSunsetSun = color(254, 238, 129);
		fill(colorSunsetSun);
		ellipse(200, 70, 30, 30);

		var colorSunsetWater = color (239, 168, 178);
		fill(colorSunsetWater);
		rect(0, 200, 640, 200);}

	else if (weather > 0) {
		// Night Scene
		var colorNightSky = color(7, 51, 124);
		fill (colorNightSky);
		rect(0, 0, 640, 360);

		var colorNightWater = color(15, 61, 114);
		fill(colorNightWater);
		rect(0, 200, 640, 200);

		var starSize;
		fill (242, 249, 182);
		starSize = random(4, 6);
		ellipse(random(0, 640), random(0, 200), starSize, starSize);
		starSize = random(2, 5);
		ellipse(random(0, 640), random(0, 200), starSize, starSize);
		starSize = random(4, 6);
		ellipse(random(0, 640), random(0, 200), starSize, starSize);
		starSize = random(2, 5);
		ellipse(random(0, 640), random(0, 200), starSize, starSize);
		starSize = random(4, 6);
		ellipse(random(0, 640), random(0, 200), starSize, starSize);
		starSize = random(2, 5);
		ellipse(random(0, 640), random(0, 200), starSize, starSize);
		starSize = random(4, 6);
		ellipse(random(0, 640), random(0, 200), starSize, starSize);
		starSize = random(2, 5);
		ellipse(random(0, 640), random(0, 200), starSize, starSize);
		starSize = random(4, 6);
		ellipse(random(0, 640), random(0, 200), starSize, starSize);
		starSize = random(2, 5);
		ellipse(random(0, 640), random(0, 200), starSize, starSize);
		starSize = random(4, 6);
		ellipse(random(0, 640), random(0, 200), starSize, starSize);
		starSize = random(2, 5);
		ellipse(random(0, 640), random(0, 200), starSize, starSize);
		starSize = random(4, 6);
		ellipse(random(0, 640), random(0, 200), starSize, starSize);
		starSize = random(2, 5);
		ellipse(random(0, 640), random(0, 200), starSize, starSize);
		starSize = random(4, 6);
		ellipse(random(0, 640), random(0, 200), starSize, starSize);
		starSize = random(2, 5);
		ellipse(random(0, 640), random(0, 200), starSize, starSize);
		starSize = random(4, 6);
		ellipse(random(0, 640), random(0, 200), starSize, starSize);
		starSize = random(2, 5);
		ellipse(random(0, 640), random(0, 200), starSize, starSize);
		starSize = random(4, 6);
		ellipse(random(0, 640), random(0, 200), starSize, starSize);
		starSize = random(2, 5);
		ellipse(random(0, 640), random(0, 200), starSize, starSize);
		starSize = random(4, 6);
		ellipse(random(0, 640), random(0, 200), starSize, starSize);
		starSize = random(2, 5);
		ellipse(random(0, 640), random(0, 200), starSize, starSize);
		starSize = random(4, 6);
		ellipse(random(0, 640), random(0, 200), starSize, starSize);
		starSize = random(2, 5);
		ellipse(random(0, 640), random(0, 200), starSize, starSize);
	}




		// LANDSCAPES
	var landscapes = random(10);

	// Rocky Cliffs

	if (landscapes > 8) {
	// Background Cliffs
	var colorBackCliffs = color(73, 80, 89);
	fill(colorBackCliffs);
	triangle (-100, 200, 90, 160, 200, 200);
	triangle (50, 200, 180, 160, 400, 200);
	// Foreground Cliffs
	var colorForeCliffs = color(64, 73, 89);
	fill(colorForeCliffs);
	triangle (380, 230, 510, 170, 700, 230);
	triangle (510, 170, 640, 170, 700, 250);

	// Lighthouse
	fill (255, 255, 255);
	quad(520, 180, 535, 80, 565, 80, 580, 180);
	fill (0, 0, 0);
	quad (530, 75, 530, 80, 570, 80, 570, 75);
	quad (535, 60, 535, 80, 565, 80, 565, 60);
	quad (530, 65, 530, 60, 570, 60, 570, 65);
	triangle (530, 40, 550, 20, 570, 40);

	fill (127, 156, 172);
	quad(535, 40, 535, 60, 565, 60, 565, 40);}

	// Mountains

	else if (landscapes > 5) {
	// background mountains
	var colorBackMountains = color(198, 220, 235);
	fill(colorBackMountains);
	triangle (-100, 200, 90, 80, 400, 200);
	triangle (-60, 200, 30, 70, 300, 200);
	triangle (100, 200, 250, 60, 400, 200);
	triangle (200, 200, 420, 80, 500, 200);
	triangle (200, 200, 420, 80, 500, 200);
	triangle (300, 200, 550, 70, 700, 200);

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

	// Background Land and Trees
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

	// Foreground Land and Trees
	var colorForeLand = color(7, 27, 62);
	fill (colorForeLand);
	triangle (410, 320, 560, 270, 700, 320);
	triangle (560, 270, 700, 260, 700, 340);
	triangle (470, 270, 505, 50, 530, 270);
	triangle (550, 250, 605, 20, 650, 250);
	rect(595, 250, 20, 50);
	rect(495, 250, 10, 50);}


 else if (landscapes > 3){
	// Forest
	var colorForeMountains = color(37, 77, 136);
	fill (colorForeMountains);
	triangle (-200, 200, 280, 100, 350, 200);
	triangle (100, 200, 400, 110, 700, 200);
	triangle (300, 200, 500, 100, 700, 200);

	var colorBackLand = color(4, 36, 77);
	fill (colorBackLand);
	triangle (0, 450, 0, 220, 120, 220);
	triangle (475, 250, 550, 500, 700, 250);

	var colorForeLand = color(7, 27, 62);
	fill (colorForeLand);
	ellipse(10, 50, 70, 90);
	ellipse(50, 30, 100, 90);
	ellipse(110, 70, 100, 50);
	ellipse(170, 50, 50, 50);
	ellipse(110, 35, 100, 50);
	rect(20, 60, 15, 250);
	rect(1, 30, 10, 250);
	rect(60, 30, 13, 250);
	rect(100, 30, 9, 200);
	rect(580, 0, 20, 300);
	rect(540, 0, 23, 350);
	rect(610, 0, 25, 380);
	rect(500, 0, 17, 270);

	// Waterfall
	fill (190, 244, 242);
	quad(280, 100, 290, 110, 300, 200, 270, 200);

	fill (255, 255, 255);
	ellipse(270, 200, 10, 10);
	ellipse(290, 200, 15, 15);
	ellipse(280, 200, 6, 6);
	ellipse(300, 200, 8, 8);}

	else if (landscapes > 0){
		// City Skyline
	var colorBackMountains = color(198, 220, 235);
	fill(colorBackMountains);
	rect (15, 80, 30, 120);
	rect (140, 80, 50, 100);
	rect (250, 110, 50, 80);
	rect (270, 150, 90, 50);
	rect (400, 20, 60, 180);
	rect (440, 100, 40, 90);


	var colorMidMountains = color(79, 125, 179);
	fill (colorMidMountains);
	rect (25, 130, 30, 70);
	rect (70, 40, 50, 150);
	rect (120, 110, 50, 80);
	rect (200, 150, 80, 50);
	rect (350, 60, 60, 140);
	rect (440, 100, 40, 90);


		var colorForeMountains = color(37, 77, 136);
		fill (colorForeMountains);
		quad(0, 190, 0, 200, 500, 200, 500, 190);
		rect (0, 150, 30, 50);
		rect (50, 110, 20, 80);
		rect (100, 70, 50, 120);
		rect (160, 90, 80, 110);
		rect (340, 90, 30, 110);
		rect (440, 100, 40, 90);}


	// BOAT
	var colorBoat = color(247, 61, 62);
	fill (colorBoat);
	arc(320, 240, 80, 80, 0, PI, OPEN);

	fill (colorBoat);
	rect(298, 263, 45, 10);


	// Mast and Sail
	fill (colorBoat);
	rect(330, 180, 5, 70);


	var colorSail = color(255, 255, 255);
	fill (colorSail);
	triangle (328, 180, 328, 235, 280, 235);
	triangle (338, 195, 338, 235, 360, 235);



	// Water for the Boat
	if (weather > 80) {
		var colorDreeryWater = color(221, 234, 243);
		fill(colorDreeryWater)
		rect(290, 270, 65, 10);}

	else if (weather > 60) {
		var colorSunnyWater = color(142, 184, 220);
		fill(colorSunnyWater);
		rect(290, 270, 65, 10);}

	else if (weather > 40) {
		fill(colorSunsetWater);
		rect(290, 270, 65, 10);}

	else if (weather > 0) {
		fill(colorNightWater);
		rect(290, 270, 65, 10);}


  // Snow
	if (weather > 80) {
	var snowflakeSize;
	fill (255, 255, 255);
	snowflakeSize = random(4, 8);
	ellipse(random(0, 640), random(0, 360), snowflakeSize, snowflakeSize);
	snowflakeSize = random(2, 5);
	ellipse(random(0, 640), random(0, 360), snowflakeSize, snowflakeSize);
	snowflakeSize = random(2, 5);
	ellipse(random(0, 640), random(0, 360), snowflakeSize, snowflakeSize);
	snowflakeSize = random(2, 5);
	ellipse(random(0, 640), random(0, 360), snowflakeSize, snowflakeSize);
	snowflakeSize = random(2, 5);
	ellipse(random(0, 640), random(0, 360), snowflakeSize, snowflakeSize);
	snowflakeSize = random(2, 5);
	ellipse(random(0, 640), random(0, 360), snowflakeSize, snowflakeSize);
	snowflakeSize = random(2, 5);
	ellipse(random(0, 640), random(0, 360), snowflakeSize, snowflakeSize);
	ellipse(random(0, 640), random(0, 360), snowflakeSize, snowflakeSize);
	snowflakeSize = random(2, 5);
	ellipse(random(0, 640), random(0, 360), snowflakeSize, snowflakeSize);
	snowflakeSize = random(2, 5);
	ellipse(random(0, 640), random(0, 360), snowflakeSize, snowflakeSize);
	snowflakeSize = random(2, 5);
	ellipse(random(0, 640), random(0, 360), snowflakeSize, snowflakeSize);
	snowflakeSize = random(2, 5);
	ellipse(random(0, 640), random(0, 360), snowflakeSize, snowflakeSize);
	snowflakeSize = random(2, 5);
	ellipse(random(0, 640), random(0, 360), snowflakeSize, snowflakeSize);
	snowflakeSize = random(2, 5);
	ellipse(random(0, 640), random(0, 360), snowflakeSize, snowflakeSize);
	ellipse(random(0, 640), random(0, 360), snowflakeSize, snowflakeSize);
	snowflakeSize = random(2, 5);
	ellipse(random(0, 640), random(0, 360), snowflakeSize, snowflakeSize);
	snowflakeSize = random(2, 5);
	ellipse(random(0, 640), random(0, 360), snowflakeSize, snowflakeSize);
	snowflakeSize = random(2, 5);
	ellipse(random(0, 640), random(0, 360), snowflakeSize, snowflakeSize);
	snowflakeSize = random(2, 5);
	ellipse(random(0, 640), random(0, 360), snowflakeSize, snowflakeSize);
	snowflakeSize = random(2, 5);
	ellipse(random(0, 640), random(0, 360), snowflakeSize, snowflakeSize);
	snowflakeSize = random(2, 5);
	ellipse(random(0, 640), random(0, 360), snowflakeSize, snowflakeSize);
	ellipse(random(0, 640), random(0, 360), snowflakeSize, snowflakeSize);
	snowflakeSize = random(2, 5);
	ellipse(random(0, 640), random(0, 360), snowflakeSize, snowflakeSize);
	snowflakeSize = random(2, 5);
	ellipse(random(0, 640), random(0, 360), snowflakeSize, snowflakeSize);
	snowflakeSize = random(2, 5);
	ellipse(random(0, 640), random(0, 360), snowflakeSize, snowflakeSize);
	snowflakeSize = random(2, 5);
	ellipse(random(0, 640), random(0, 360), snowflakeSize, snowflakeSize);
	snowflakeSize = random(2, 5);
	ellipse(random(0, 640), random(0, 360), snowflakeSize, snowflakeSize);
	snowflakeSize = random(2, 5);
	ellipse(random(0, 640), random(0, 360), snowflakeSize, snowflakeSize);
	ellipse(random(0, 640), random(0, 360), snowflakeSize, snowflakeSize);
	snowflakeSize = random(2, 5);
	ellipse(random(0, 640), random(0, 360), snowflakeSize, snowflakeSize);
	snowflakeSize = random(2, 5);
	ellipse(random(0, 640), random(0, 360), snowflakeSize, snowflakeSize);
	snowflakeSize = random(2, 5);
	ellipse(random(0, 640), random(0, 360), snowflakeSize, snowflakeSize);
	snowflakeSize = random(2, 5);
	ellipse(random(0, 640), random(0, 360), snowflakeSize, snowflakeSize);
	snowflakeSize = random(2, 5);
	ellipse(random(0, 640), random(0, 360), snowflakeSize, snowflakeSize);
	snowflakeSize = random(2, 5);
	ellipse(random(0, 640), random(0, 360), snowflakeSize, snowflakeSize);
	ellipse(random(0, 640), random(0, 360), snowflakeSize, snowflakeSize);
	snowflakeSize = random(2, 5);
	ellipse(random(0, 640), random(0, 360), snowflakeSize, snowflakeSize);
	snowflakeSize = random(2, 5);
	ellipse(random(0, 640), random(0, 360), snowflakeSize, snowflakeSize);
	snowflakeSize = random(2, 5);
	ellipse(random(0, 640), random(0, 360), snowflakeSize, snowflakeSize);
	snowflakeSize = random(2, 5);
	ellipse(random(0, 640), random(0, 360), snowflakeSize, snowflakeSize);
	snowflakeSize = random(2, 5);
	ellipse(random(0, 640), random(0, 360), snowflakeSize, snowflakeSize);
	snowflakeSize = random(2, 5);
	ellipse(random(0, 640), random(0, 360), snowflakeSize, snowflakeSize);
	snowflakeSize = random(2, 5);
	ellipse(random(0, 640), random(0, 360), snowflakeSize, snowflakeSize);
	snowflakeSize = random(2, 5);
	ellipse(random(0, 640), random(0, 360), snowflakeSize, snowflakeSize);
	snowflakeSize = random(2, 5);
	ellipse(random(0, 640), random(0, 360), snowflakeSize, snowflakeSize);
	snowflakeSize = random(2, 5);
	ellipse(random(0, 640), random(0, 360), snowflakeSize, snowflakeSize);
	snowflakeSize = random(2, 5);
	ellipse(random(0, 640), random(0, 360), snowflakeSize, snowflakeSize);
	snowflakeSize = random(2, 5);
	ellipse(random(0, 640), random(0, 360), snowflakeSize, snowflakeSize);
	snowflakeSize = random(2, 5);
	ellipse(random(0, 640), random(0, 360), snowflakeSize, snowflakeSize);
	snowflakeSize = random(2, 5);
	ellipse(random(0, 640), random(0, 360), snowflakeSize, snowflakeSize);
	snowflakeSize = random(2, 5);
	ellipse(random(0, 640), random(0, 360), snowflakeSize, snowflakeSize);
	snowflakeSize = random(2, 5);
	ellipse(random(0, 640), random(0, 360), snowflakeSize, snowflakeSize);
	snowflakeSize = random(2, 5);
	ellipse(random(0, 640), random(0, 360), snowflakeSize, snowflakeSize);
	snowflakeSize = random(2, 5);
	ellipse(random(0, 640), random(0, 360), snowflakeSize, snowflakeSize);
	snowflakeSize = random(2, 5);
	ellipse(random(0, 640), random(0, 360), snowflakeSize, snowflakeSize);
	snowflakeSize = random(2, 5);
	ellipse(random(0, 640), random(0, 360), snowflakeSize, snowflakeSize);}






}
