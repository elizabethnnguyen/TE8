function setup() {
  createCanvas(700, 700);
  background("#ffbb1c");
}

function draw() {
  //hair length left + middle
  fill("#1d222b");
  strokeWeight(1);
  stroke("#1d222b");
  beginShape();
  rectMode(CENTER);
  rect(348,380,250,340);
 vertex(225, 550);
  quadraticVertex(41, 560, 245, 163);
  endShape(close);


//hair length right
  fill("#1d222b");
  strokeWeight(1);
  stroke("#1d222b");
  beginShape();
  vertex(460, 550);
  quadraticVertex(656, 560, 453, 163);
  endShape(close);


  //top head
  stroke("#1d222b");
  fill("#1d222b");
  arc(350, 210, 241, 210, -PI, 0);

  //head
  noStroke();
  fill("#f79860")
  circle(350, 250, 170);


  //bangs
  fill("#1d222b");
  strokeWeight(1);
  stroke("#1d222b");

  //right bangs1
  beginShape();
  vertex(320, 160);
  bezierVertex(320, 20, 250, 240, 400, 220);
  endShape();

  //right bangs2
  beginShape();
  vertex(320, 165);
  bezierVertex(320, 165, 430, 140, 435, 240);
  endShape();

  //left bangs1
  beginShape();
  vertex(320, 160);
  bezierVertex(320, 160, 320, 240, 220, 220);
  endShape();

  //left bangs2
  beginShape();
  vertex(320, 165);
  bezierVertex(320, 165, 265, 165, 260, 240);
  endShape();

  noStroke();

  //neck
  fill("#f79860");
  quad(330, 310, 370, 310, 380, 370, 320, 370);

  //chest
  rectMode(CORNER);
  fill("#663f0b");
  quad(320, 370, 380, 370, 510, 430, 190, 430);
  rect(190, 430, 320, 70);

  //lips
  noStroke();
 fill("#9e202f")
 triangle(345,313,345,287,326,302);
 triangle(355,313,355,287,374,302);
 ellipse(350,300, 25, 28);
  stroke("#520811");
  strokeWeight(0.5);
  line(325,302,375,302);
 // triangle(347,300,353,300,350,298);

  //left eye
  fill("#ffe1cf");
  noStroke();
  scale(0.4);
  translate(430, 225);
  rotate(PI / 12.0);
  beginShape();
  vertex(330, 300);
  bezierVertex(380,250,440,250,490,300);
  bezierVertex(440,350,380,350,330,300)
  endShape();

  //left pupil
  fill("#1d222b");
  ellipse(410, 300, 110, 75);


  //right eye
  fill("#ffe1cf");
  noStroke();
  translate(150, 180);
  rotate(PI / -6.0);
  beginShape();
  vertex(330, 300);
  bezierVertex(380,250,440,250,490,300);
  bezierVertex(440,350,380,350,330,300)
  endShape();

//right pupil
  fill("#1d222b");
  ellipse(410, 300, 110, 75);

}
