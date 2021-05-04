var backgroundImage,catImage1,catImage2,catImage3;
var mouseImage1,mouseImage2,mouseImage3;

function preload() {
    backgroundImage = loadImage("images/garden.png");
    catImage1 = loadAnimation("images/cat1.png");
    catImage2 = loadAnimation("images/cat2.png","images/cat3.png");
    catImage3 = loadAnimation("images/cat4.png");
    mouseImage1 = loadAnimation("images/mouse1.png");
    mouseImage2 = loadAnimation("images/mouse2.png", "images/mouse3.png");
    mouseImage3 = loadAnimation("images/mouse4.png");
}   

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    cat = createSprite(870,600);
    cat.addAnimation("catsleeping",catImage1);
    cat.scale = 0.2;
    
    mouse = createSprite(200,600);
    mouse.addAnimation("mousestanding",mouseImage1); 
    mouse.scale = 0.2;
   
}   

function draw() {

    background(backgroundImage);
    
    if(cat.x - mouse.x<(cat.width - mouse.width)/2){
        cat.velocityX = 0
        cat.addAnimation("catStanding",catImage3);
        cat.x = 300
        cat.scale = 0.2
        cat.changeAnimation("carRunning");

        mouse.addAnimation("mouse",mouseImage3);
        mouse.scale = 0.2
        mouse.changeAnimation("mouse");
    }


    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyCode === LEFT_ARROW){
        cat.velocityX = -5;
        cat.addAnimation("catRunning",catImage2);
        cat.changeAnimation("carRunning");

        mouse.addAnimation("mouseTeasing",mouseImage2);
        mouse.frameDelay = 25;
        mouse.changeAnimation("mouseTeasing");
    }

}
