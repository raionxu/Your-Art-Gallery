let cam;
let angle = 0;
let bg;
let cubism;
let pillar;
let f = 5;
let w = 100;
let d = 90;
let W = 0;
let frame;


function preload(){
  
  bg = loadImage('BG.png'); 
  cubism = loadImage('Cubism1.png');
  frame = loadModel('frame.obj',true); 
  
}

function setup() {
	createCanvas(900, 900, WEBGL);
	cam = createCapture(VIDEO)
	cam.size(320, 240);
	cam.hide()
    noStroke()
}

function draw() {

  
  push()
  translate(0,0,-200)
  rotateY(frameCount *0.001);
  strokeWeight(3)
  stroke(255, 204, 0);
  noFill();
  box(290)
  pop()
  
  
  let dx = mouseX - width /2;
  let dy = mouseY - height /2;
  let v = createVector(dx, dy, 0);
  v.normalize();

  background(0)
  
  push()
  pointLight(255, 255, 255, 0, 0, -600)
  translate(0,0,-800)
  scale(6)
  model(frame);
  pop()
  
  	
  let myR = map(sin(frameCount * 0.03), -2, 2, 0, 255);
  let myG = map(sin(frameCount * 0.03), -2, 2, 0, 255);
  let myB = map(sin(frameCount * 0.03), -1, 1, 0, 255);
  pointLight(myR, myG, myB);
  
  
  pointLight(0, 0, 255, 0, 0, 0)
  let locX = mouseX - width / 2;
  let locY = mouseY - height / 2;
  pointLight(255, 250, 250, locX*10, locY*10, 0);
  
  push();
  pointLight(0, 0, 255, 0, 0, 0)
  translate(600,1250,-2500);
  texture(cubism);
  rotateX(-80)

  rotateZ(-120)
  plane(5000,5100);
  pop();

  
  push();
  pointLight(0, 0, 255, 0, 0, 0)
  translate(0,-10,-800);
  texture(bg);
  plane(800,1100);
  pop();

  

  rotateX(HALF_PI);


  
  [13, 3, -3].map(i => spotLight(W, W, W, 0, -W * i, w, 0, i, 0));
  
    
  push()
  translate(0,-200,0)
	rotateY(f += 0.001);
    rotateZ(f += 0.001);
    rotateX(f += 0.001);
	for (z = -w; z <= w; z += d) {
		for (y = -w; y <= w; y += d) {
			for (x = -w; x <= w; x += d) {
				push();
				translate(x, y, z);
                texture(cam);	
				sphere((sin(x / w + y / w + z + f * 3) / 25) * (windowHeight));
				pop();
			}
		}
	}
  
}