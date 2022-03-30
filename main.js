function preload(){

}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(0, 250);
    video = createCapture(VIDEO);
    video.show();
}



function draw() {
    image(video, 0, 0, 640, 480);
    circle(75, 75, 200);
    circle(560, 75, 200);
    circle(75, 400, 200);
    circle(560, 400, 200);
describe('red circle with black outline in mid of gray canvas');
}

function take_snapshot(){
    save("student_name.png");
}