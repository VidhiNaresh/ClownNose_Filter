noseX=0;
noseY=0;
function preload() {
clown_nose=loadImage("https://i.postimg.cc/kM85sT2R/clown-nose.png");
}
function setup() {
    canvas=createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    posenet = ml5.poseNet(video,modelloaded);
    posenet.on('pose', gotposes);
}
function modelloaded() {
    console.log("posenet is initialized");
}
function gotposes(results) {
if(results.lenght>0) {
    console.log(results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    console.log("nose x = "+noseX);
    console.log("nose y = "+noseY);
}
}
function draw(){
image(video,0, 0, 300, 300);
fill(255,0, 0);
stroke(255, 0, 0);
circle(noseX, noseY, 20);
image(clown_nose, noseX, noseY, 30, 30);
}
function take_snapshot(){
    save("clown-nose.png");
}