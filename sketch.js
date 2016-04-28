// give movableShape a nice, descriptive name to work with here
// (i.e., replace the variable name myRocket with something more descriptive (e.g., myCar, myRocket).)
var myRocket = movableShape;

// Redefine drawShape() by putting your moving shape in here
// (Basically, you can copy and paste your code from last time, although you may wish to refactor it so that it's more readable.)
// That said, you may wish to try putting your unrefactored, raw drawing code from week 1 in here
myRocket.drawShape = function () {
	fill("red");
  triangle(200, 500, 300, 300, 400, 500);
  triangle(250, 200, 300, 100, 350, 200);

  fill(150);
  rect(250, 200, 100, 300);

  fill(50);
  ellipse(300, 250, 50, 50);
  ellipse(300, 325, 50, 50);

  fill(203, 236, 247);
  ellipse(300, 250, 40, 40);
  ellipse(300, 325, 40, 40);

	fill(0);
	textSize(32);
	text("USA", 268, 450);

  fill("yellow");
  triangle(275, 500, 300, 575, 325, 500);

  fill("red");
  triangle(285, 500, 300, 550, 315, 500);
	// your code goes here
};

// You will also need to do some work to set the speed of the shape. How do you want it to move? What do you need to change to get it to move?

setup = function() {
	createCanvas(600, 600);
};

draw = function() {
  background(0); // refresh the background
  myRocket.display(); // display myRocket
  myRocket.update(); // and then update it
};
