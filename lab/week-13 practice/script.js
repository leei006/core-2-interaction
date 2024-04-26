function setup() {
    createCanvas(windowWidth,windowHeight);
  }
  
  function draw() {
    fill (250, 242, 219);
     // left ear
     ellipse (190,150,20,90);
     // right ear
     ellipse (210,150,20,90);
         // left leg
         ellipse (190,300,20,90);
         // right leg
         ellipse (210,300,20,90);
           // left arm
           ellipse (180,230,60,10);
           // right arm
           ellipse (220,230,60,10);
      // body
      ellipse (200,250,50,70);
    // head
     ellipse (200,200,50,50);
   
    fill (252, 126, 7)
     //face
     triangle(210, 300, 238, 300, 246, 215);
  }