var scene;
var paddle;
var paddle2;
var moveSound;
var EPICMUSIC;
var CHANGE = 10;
var ball;

function checkCollisions() {
        
        if (paddle.collidesWith(ball)) {
        ball.dx *= -1; 
        ball.dy *= -1;
    } 
    else if (paddle2.collidesWith(ball)){
        ball.dx *= -1
        ball.dy *= -1
    }
}


function Paddle() {
    tPaddle = new Sprite(scene, "paddle.png", 100, 20);
    tPaddle.setAngle(180);
    tPaddle.setSpeed(0);

    tPaddle.checkKeys = function() {
        if (keysDown[K_UP]) {
            this.changeYby(-CHANGE);
            if (this.y - this.width / 2 < 0) {
                this.setY(this.width / 2);
            }
            moveSound.play();
        }

        if (keysDown[K_DOWN]) {
            this.changeYby(CHANGE);
            if (this.y + this.width / 2 > scene.height) {
                this.setY(scene.height - this.width / 2);
            }
            moveSound.play();
        }
    }

    return tPaddle
}


function init() {
    scene = new Scene();
    scene.setSize(600,300);
    paddle = new Paddle();
    paddle2 = new Paddle();
    moveSound = new Sound("https://jelaw21.github.io/Resources/pop.wav");
    EPICMUSIC = new Sound("bensound-thejazzpiano.mp3");
    paddle2.setSpeed(10);
    paddle2.setBoundAction(BOUNCE);
    paddle.setPosition(15, scene.height / 2);
    paddle2.setPosition(scene.width - 20, scene.height / 2);
    ball = new Sprite(scene, "http://aharrisbooks.net/h5g/h5g_5/redBall.png" ,50, 50);
    ball.setMoveAngle(60);
    ball.setSpeed(8);
    ball.setBoundAction(BOUNCE);
    
    
    scene.start();
    EPICMUSIC.play();
}



function update() {
    
    scene.clear();
    checkCollisions();
    paddle.checkKeys();
    paddle2.update();
    paddle.update();
    ball.update();
}
