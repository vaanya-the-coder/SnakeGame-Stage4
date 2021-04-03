var snake,snakeImg;
var appleImg,bananaImg,grapesImg,orangeImg,strawberryImg;
var backgroundImg;
var w,h;
var food;
var rand;
var rez = 20;

function preload(){
    backgroundImg = loadImage("images/background.png");
    appleImg = loadImage("images/apple.png");
    bananaImg = loadImage("images/banana.png");
    grapesImg = loadImage("images/grapes.png");
    orangeImg = loadImage("images/orange.png");
    strawberryImg = loadImage("images/strawberry.png");
}

function setup(){
    createCanvas(400,400);
    w = floor(width/rez);
    h = floor(height/rez);
    frameRate(5);

    snake = new Snake();
    rand = Math.round(random(1,5));
    foodlocation();
}
function foodlocation(){
    var x = floor(random(w));
    var y = floor(random(h));
    food = createVector(x,y);
}
function keyPressed(){
    if(keyCode === LEFT_ARROW){
        snake.setdir(-1,0);
    }
    else if(keyCode === RIGHT_ARROW){
        snake.setdir(1,0);
    }
    else if(keyCode === UP_ARROW){
        snake.setdir(0,-1);
    }
    else if(keyCode === DOWN_ARROW){
        snake.setdir(0,1);
    }

}
function draw(){
    background(backgroundImg);
    scale(20);
    if(snake.eat(food)){
        rand = Math.round(random(1,5));
        foodlocation();
    }
    snake.update();
    snake.display();
    if(snake.end()){
        background("green");
        textSize(2);
        text("GAME OVER",w/4,h/2);
        appleImg = null;
        bananaImg = null;
        strawberryImg = null;
        orangeImg = null;
        grapesImg = null;
    }
    if(rand === 1){
        image(appleImg,food.x,food.y,1.2,1.2);
    }
    else if(rand === 2){
        image(bananaImg,food.x,food.y,1.2,1.2);
    }
    else if(rand === 3){
        image(grapesImg,food.x,food.y,1.2,1.2);
    }
    else if(rand === 4){
        image(orangeImg,food.x,food.y,1.2,1.2);
    }
    else if(rand === 5){
        image(strawberryImg,food.x,food.y,1.2,1.2);
    }


}