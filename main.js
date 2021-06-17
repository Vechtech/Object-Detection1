pic = "";

function preload() {
    pic = loadImage("image_1.jpg");
}

function setup() {
    canvas = createCanvas(600, 400);
    canvas.position(450, 200);
}

function draw() {
    image(pic, 0, 0, 600, 400);
    fill("blue");
    textSize(22);
    text("sofa", 150, 300);
    noFill();
    stroke("red");
    rect(30, 250, 250, 100);

    fill("lime");
    textSize(22);
    text("windows",250, 170);
    noFill();
    stroke("blue");
    rect(220, 120, 150, 100);

    fill("cyan");
    textSize(22);
    text("TV",500, 165);
    noFill();
    stroke("yellow");
    rect(480, 165, 60, 100);

    fill("magenta");
    textSize(22);
    text("lamp",325, 220);
    noFill();
    stroke("lime");
    rect(320, 200, 60, 100);
}