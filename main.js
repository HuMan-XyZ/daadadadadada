canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

rover_width = 99.99999;
rover_height = 99.99999;

background_image = "mars.jpg";
rover_image = "rover.png";

bk_image_array = ["mars.jpg","m1.jpg","m2.jpg","m3.jpg","m4.jpg","m5.jpg","m6.jpg"];
random_number = Math.floor(Math.random() * 7);
bk_image = bk_image_array[random_number];
///Rover Locator 2000
rover_x = 8;
rover_y = 6.95;
///My Locator Broke After This

function Add() {
    ///Image Loader 5000
    ///Image Loader 100% Ready To Upload
    background_imageLoader = new Image();
    background_imageLoader.onload = upload_background;
    background_imageLoader.src = bk_image;
    ///Image Loader Damaged, 50% Of Loader Functions Remain.
    ///Image Loader 100% Ready To Upload
    rover_imageLoader = new Image();
    rover_imageLoader.onload = upload_rover;
    rover_imageLoader.src = rover_image;
    ///Image Loader Crashed, Bye Bye 
}

function upload_background() {
    ctx.drawImage(background_imageLoader, 0, 0, canvas.width, canvas.height);

}

function upload_rover() {
    ctx.drawImage(rover_imageLoader, rover_x, rover_y, rover_width, rover_height);

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    var keypressed = e.keyCode;



    if (keypressed == '38' || keypressed == '87') {
        up();
        console.log("W,Up Arrow");

    }
    if (keypressed == '37' || keypressed == '65') {
        left();
        console.log("A,Left Arrow");

    }
    if (keypressed == '40' || keypressed == '83') {
        down();
        console.log("S,Down Arrow");

    }
    if (keypressed == '39' || keypressed == '68') {
        right();
        console.log("D,Right Arrow");

    }
}

function up() {
    if (rover_y >= 0) {
        rover_y -= 10;
        upload_background();
        upload_rover();
    }
}

function down() {
    if (rover_y <= 535) {
        rover_y += 10;
        upload_background();
        upload_rover();
    }
}

function right() {
    if (rover_x <= 700) {
        rover_x += 10;
        upload_background();
        upload_rover();
    }
}

function left() {
    if (rover_x >= 0) {
        rover_x -= 10;
        upload_background();
        upload_rover();
    }
}