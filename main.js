Tum_Jaise_Bewado_Ka_Sahara_Hai_Dosto = "";
Love_You_Zindagi = "";
rightWrist_x = 0;
rightWrist_y = 0;
leftWrist_x = 0;
leftWrist_y = 0;

function setup() {
    canvas = createCanvas(600, 530);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPose);
}

function preload() {
    Tum_Jaise_Bewado_Ka_Sahara_Hai_Dosto = loadSound("music2.mp3");
    Love_You_Zindagi = loadSound("music.mp3");
}

function draw() {
    image(video, 0, 0, 600, 530);

    fill("#00ff00");
    stroke("#ff0000");

    song_name = Tum_Jaise_Bewado_Ka_Sahara_Hai_Dosto.isPlaying();
    console.log(song_name);

    if (scoreleftWrist > 0.2) {
        circle(leftWrist_x, leftWrist_y, 20);
        Love_You_Zindagi.stop();
        if (song_name == false) {
            Tum_Jaise_Bewado_Ka_Sahara_Hai_Dosto.play();
        }
        else {
            console.log("Tum_Jaise_Bewado_Ka_Sahara_Hai_Dosto");
            document.getElementById("song_id").innerHTML = "Tum_Jaise_Bewado_Ka_Sahara_Hai_Dosto";
        }
    }
}

function modelLoaded() {
    console.log('poseNet Is Initalized')
}

function gotposes(results) {
    if (results.length > 0) {
        console.log(results);

        scoreleftWrist = results[0].pose.keypoints[9].score;
        console.log(scoreleftWrist);

        leftWrist_x = results[0].pose.leftWrist.x;
        leftWrist_y = results[0].pose.leftWrist.y;
        console.log("leftWrist_x = " + leftWrist_x + " leftWrist_y = " + leftWrist_y);

        rightWrist_x = results[0].pose.rightWrist.x;
        rightWrist_y = results[0].pose.rightWrist.y;
        console.log("rightWrist_x = " + rightWrist_x + " rightWrist_y = " + rightWrist_y);
    }
}