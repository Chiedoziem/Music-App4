song1 = "";
song2 = "";
song3 = "";
song4 = "";
song5 = "";
song6 = "";
song7 = "";
song8 = "";
song9 = "";
song10 = "";

pic7 = "";
pic8 = "";

SongStatus = ""
SongStatus2 = ""
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
leftWristScore = 0;
rightWristScore = 0;
function preload(){
  song1 = loadSound("Bastille - Pompeii (Official Music Video).mp3");
  song2 = loadSound("Conan Gray - Maniac (Lyrics) Tell all of your friends that I'm crazy and drive you mad [Tiktok Song].mp3");
  


  pic8 = loadImage("Pompeii.jpg")
 
  pic7 = loadImage("Maniac.png")
  
}
function setup(){
    canvas = createCanvas(640, 520);
    canvas.position(0, 490);
    video = createCapture(VIDEO);
    video.size(640, 420);
video.hide();
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
 function draw(){
    image(video, 0, 0, 640, 520);

    SongStatus = song1.isPlaying();
SongStatus2 = song2.isPlaying()

    if(rightWristScore > 0.2){
      circle(rightWristX, rightWristY,20);
     
song2.stop();
if (SongStatus == false){
     song1.play();
document.getElementById("song_img").src = "Pompeii.jpg"
document.getElementById("songplayer").innerHTML = "Now Playing: Bastille - Pompeii"
    }
}
if (leftWristScore > 0.2){
  circle(leftWristX,leftWristY,20);
  song1.stop();
  if (SongStatus2 == false){
    song2.play();
    document.getElementById("songplayer").innerHTML = "Now Playing: Conan Gray - Maniac"
    document.getElementById("song_img").src = "Maniac.png"
  }
}
    }
    
function play(){
  song.play();
  song.setVolume(1);
  song.rate(1)

  
}
function modelLoaded(){
  console.log('Model Loaded');
}
function gotPoses(results){
if (results.length > 0){
  console.log(results);
  rightWristScore = results[0].pose.keypoints[10].score;
  leftWristScore = results[0].pose.keypoints[9].score;
  
  console.log("Score of Right Wrist "+ rightWristScore + "Score of Left Wrist"+ leftWristScore);
  leftWristX = results[0].pose.leftWrist.x;
  leftWristY = results[0].pose.leftWrist.y;
  console.log('Left Wrist X '+leftWristX+'Left Wrist Y'+leftWristY);
  rightWristX = results[0].pose.rightWrist.x;
  rightWristY = results[0].pose.rightWrist.y;
  console.log('Right Wrist X '+rightWristX+'Right Wrist Y'+leftWristY)
}
}
function end(){
  song1.stop();
  song2.stop();
}
