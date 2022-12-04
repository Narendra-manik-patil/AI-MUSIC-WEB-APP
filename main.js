Tum_Jaise_Bewado_Ka_Sahara_Hai_Dosto = "";
Love_You_Zindagi = "";

function setup() {
    canvas = createCanvas(600, 530);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function preload() {
    Tum_Jaise_Bewado_Ka_Sahara_Hai_Dosto = loadSound("music2.mp3");
    Love_You_Zindagi = loadSound("music.mp3");
}

function draw() {
    image(video, 0, 0, 600, 530);
}