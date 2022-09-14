function preload(){
	mario_gameover=loadSound("gameover.wav");
	mario_die=loadSound("mariodie.wav");
	mario_coin=loadSound("coin.wav");
	mario_jump=loadSound("jump.wav");
	mario_kick=loadSound("kick.wav");
	world_start=loadSound("world_start.wav");
	MarioAnimation();
	setSprites();
}
function setup(){
	canvas=createCanvas(1240,336);
	canvas.parent('canvas');
	initializeInSetup(mario);
	video=createCapture(VIDEO);
	video.size(800,400);
	video.parent('game_console');
	posenet=ml5.poseNet(video, modelLoaded);
	posenet.on('pose', gotPoses);
}
function modelLoaded(){
	console.log('Model Loaded!');
}
function gotPoses(results){
	if(results.length > 0){
		console.log(results);
		noseX=results[0].pose.nose.x;
		noseY=results[0].pose.nose.y;
	}
}
function draw(){
	game();
}





