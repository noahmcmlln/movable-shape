// give movableShape a nice, descriptive name to work with here
// (i.e., replace the variable name myShape with something more descriptive (e.g., myCar, myRocket).)
var myCar = movableShape;

// Redefine drawShape() by putting your moving shape in here
// (Basically, you can copy and paste your code from last time, although you may wish to refactor it so that it's more readable.)
// That said, you may wish to try putting your unrefactored, raw drawing code from week 1 in here
myCar.drawShape = function () {
	noStroke();
	fill(184, 9, 32); // hood? body around windshield? roof? whatever the word is
  ellipse(300, 250, 325, 200);

  fill(193, 202, 232); // windshield
  ellipse(300, 250, 300, 150);

  fill(184, 9, 32); // car's body
  ellipse(125, 300, 100, 100);
  ellipse(475, 300, 100, 100);
  rect(125, 250, 350, 100);

  fill(0); // two tires
  ellipse(175, 350, 75, 75);
  ellipse(425, 350, 75, 75);

  fill(150); // two hubcaps
  ellipse(175, 350, 50, 50);
  ellipse(425, 350, 50, 50);

  fill(245, 241, 42); // headlights
  ellipse(110, 300, 30, 30);
	// your code goes here
};

// You will also need to do some work to set the speed of the shape. How do you want it to move? What do you need to change to get it to move?

setup = function() {
	createCanvas(600, 600);
};

draw = function() {
  background(200); // refresh the background
  myCar.display(); // display myShape
  myCar.update(); // and then update it
};
