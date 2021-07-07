var bg,bg2,form,system,code,security,gif;
var score=0;

function preload() {
 
  
  bg= loadImage("aladdin_cave.jpg")
  bg2 = loadImage("aladdin_cave2.jpg")  
}

function setup() {
  createCanvas(1000,500);
  security = new Security();
  system = new System();
  
  
  
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);
// add code for changing the background to the treasure background
  

  if(score === 3) {
    clear()
    background(bg2)
    gif = createImg("gif.gif");
    gif.position(400,250);
    gif.size(150,150);
    fill("black")
    textSize(40);
    text("TREASURE UNLOCKED",250, 200);
  }

  drawSprites()
}