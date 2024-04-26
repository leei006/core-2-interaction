function setup() {
    createCanvas(windowWidth,windowHeight);
  }
  
  function draw() {
fill (243, 118, 20);
         // left leg
         rect (185,300,10,5);
         // right leg
         rect (205,300,10,5);
fill (70, 185, 11);
           // left arm
           ellipse (180,260,20,70);
           // right arm
           ellipse (220,260,20,70);
      // body
      ellipse (200,250,40,70);
    // head
     ellipse (200,200,40,50);
   
    fill (252, 126, 7)
     //beak
     triangle(190, 200, 200, 220, 210, 200);
  }