// give movableShape a nice, descriptive name to work with here
// (i.e., replace the variable name myShape with something more descriptive (e.g., myCar, myRocket).)
var myShape = movableShape;

// Redefine drawShape() by putting your moving shape in here
// (Basically, you can copy and paste your code from last time, although you may wish to refactor it so that it's more readable.)
// That said, you may wish to try putting your unrefactored, raw drawing code from week 1 in here
myShape.drawShape = function () {
	noStroke();

  fill("yellow"); // tractor beam
  triangle(200, 600, 300, 275, 400, 600);

  fill(150); // body
  ellipse(300, 275, 400, 100);

  fill(255); // dome part on top
  arc(300, 250, 100, 100, PI, TWO_PI, CHORD);
  ellipse(300, 250, 100, 25);

  fill("yellow"); // lights around rim
  ellipse(110, 275, 10, 10);
  ellipse(125, 287.5, 10, 10);
  ellipse(150, 297.5, 10, 10);
  ellipse(175, 302.5, 10, 10);
  ellipse(200, 307.5, 10, 10);
  ellipse(225, 310, 10, 10);
  ellipse(250, 312.5, 10, 10);
  ellipse(275, 313.75, 10, 10);
  ellipse(300, 315, 10, 10);
  ellipse(325, 313.75, 10, 10);
  ellipse(350, 312.5, 10, 10);
  ellipse(375, 310, 10, 10);
  ellipse(400, 307.5, 10, 10);
  ellipse(425, 302.5, 10, 10);
  ellipse(450, 297.5, 10, 10);
  ellipse(475, 287.5, 10, 10);
  ellipse(490, 275, 10, 10);
	// your code goes here
};

// You will also need to do some work to set the speed of the shape. How do you want it to move? What do you need to change to get it to move?

setup = function() {
	createCanvas(600, 600);
};

draw = function() {
  background(100); // refresh the background
  myShape.display(); // display myShape
  myShape.update(); // and then update it
};
