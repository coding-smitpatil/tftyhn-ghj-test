song1="";
song2="";
song1status="";
song2status="";
leftwristx=0;
leftwristy=0;
rightwristx=0;
song1status="";
song2status="";
rightwristy=0;
scoreleftwrist=0;
scorerightwrist=0;


function preload(){
    song1=loadSound("1.mp3");
    song2=loadSound("2.mp3");
}

function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    posenet=ml5.poseNet(video,modelloaded);
    posenet.on("pose",getposes);
}

function draw(){
    image(video,0,0,600,500);
    song1status=song1.isPlaying();
    song2status=song2.isPlaying();
    fill("green");
    stroke("green");
    if(scoreleftwrist>0.2){
        circle(leftwristx,leftwristy,20);
       song1.stop();
       if(song2status== false){
           song2.play();
           document.getElementById("song").innerHTML="playingsong2";
        
    }
    }
    if(scorerightwrist>0.2){
        circle(rightwristx,rightwristy,20);
       song2.stop();
       if(song1status== false){
           song1.play();
           document.getElementById("song").innerHTML="playingsong1";
        
    }
    }

}
function play(){
    song1.play();
    song1.setVolume(1);
    song1.rate(1);
}

function modelloaded(){
    console.log("posenetisinniatialized");
}

function getposes(results){
if(results.length>0)
{console.log(results);
leftwristx=results[0].pose.leftWrist.x;
leftwristy=results[0].pose.leftWrist.y;
rightwristx=results[0].pose.rightWrist.x;
rightwristy=results[0].pose.rightWrist.y;
scoreleftwrist=results[0].pose.keypoints[9].score;
scorerightwrist=results[0].pose.keypoints[10].score;
}
}

