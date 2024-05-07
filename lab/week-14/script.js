let colors;
let currentColor;

function setup() {
    createCanvas(windowWidth,windowHeight);
    currentColor = color(0, 0, 0);
    colors = [
        [190, 226, 160],
        [245, 231, 141],
        [222, 199, 245],
    ];
  }
  
function draw() { 
    var choice=random(colors);
    fill(choice[0], choice[1], choice[2]);
         // left leg
         rect (185,300,10,5);
         // right leg
         rect (205,300,10,5);
         fill(choice[0], choice[1], choice[2]);;
           // left arm
           ellipse (180,260,20,70);
           // right arm
           ellipse (220,260,20,70);
      // body
      ellipse (200,250,40,70);
    // head
     ellipse (200,200,40,50);

    fill(choice[0], choice[1], choice[2]);
     //beak
     triangle(190, 200, 200, 220, 210, 200);
  }