var bg,bg2,form,system,code,security;
var score=0;
var music

function preload() {
  bg = loadImage("blackpink.jpg");
  bg2 = loadImage("Astro.jpg")
  music = loadSound("instrumental.mp3")
}

function setup() {
  createCanvas(1220,800);
  system = new System()
  security = new Security()
  //music.play()
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);

  if(score === 5) {
    clear()
    background(bg2)
    fill("black")
    textSize(40);
    text("TREASURE UNLOCKED",250, 200);
  }

  drawSprites()
}