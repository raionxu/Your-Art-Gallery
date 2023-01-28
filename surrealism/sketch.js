let video;
let poseNet;
let noseX = 0;
let noseY = 0;
let eyelX = 0;
let eyelY = 0;
let img;
let apple;

function preload(){
  
  img = loadImage('BG2-1.png');
  apple = loadImage('apple.png');
}
 
function setup() {
  createCanvas(900, 900);
  video = createCapture(VIDEO);
  video.hide();
  video.size(320, 240);
  poseNet = ml5.poseNet(video, modelReady);
  poseNet.on('pose', gotPoses);
}

function gotPoses(poses) {
  // console.log(poses);
  if (poses.length > 0) {
    let nX = poses[0].pose.keypoints[0].position.x;
    let nY = poses[0].pose.keypoints[0].position.y;
    let eX = poses[0].pose.keypoints[1].position.x;
    let eY = poses[0].pose.keypoints[1].position.y;
    noseX = lerp(noseX, nX, 0.5);
    noseY = lerp(noseY, nY, 0.5);
    eyelX = lerp(eyelX, eX, 0.5);
    eyelY = lerp(eyelY, eY, 0.5);
  }
}

function modelReady() {
  console.log('model ready');
}

function draw() {
  
  background(255)
 

  translate(width / 3, height / 3);
  image(video, 0,0);
  

  let d = dist(noseX, noseY, eyelX, eyelY);

  
  fill(255, 0, 0);
  ellipse(noseX, noseY, d);
  
   
  push();
   translate(-289, -310);
  image(img,0,0);
  pop();
  


  
  translate(-440,-430)
   image(apple,noseX,noseY)

}