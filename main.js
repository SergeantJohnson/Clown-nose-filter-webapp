
noseX=0;
noseY=0;
function preload (){
 clownNose=loadImage('https://i.postimg.cc/tC1b2NT2/red-nose.png');
}

function setup () {

    canvas=createCanvas(300,300);
    canvas.center();
   // canvas.position(150,150);
     video=createCapture(VIDEO);
     video.size(300,300);
     video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw() {
  image(video,0,0,300,300);
  fill(255,0,0);
  stroke(255,0,0);
  //circle(noseX,noseY,20);
  image(clownNose,noseX,noseY,30,30);   
}

function take_snapshot() {
    save('My_filtered_image.jpg');
}

function modelLoaded() {
    console.log("Posenet is initialised");
    
}

function gotPoses(results) {
    if(results.length>0) {
        console.log(results);
        noseX=results[0].pose.nose.x-15;
        noseY=results[0].pose.nose.y-15;
        console.log("x position of nose is " + results[0].pose.nose.x);
        console.log("y position of nose is " + results[0].pose.nose.y);
    }
}
