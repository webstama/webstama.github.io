var scene;
var enemy;
var ship;
var ribbit;
var enemies;
var NUMENEMIES = 3;

function Enemy(){
    tEnemy = new Sprite(scene, "http://aharrisbooks.net/h5g/h5g_7/fly.png", 20, 20);
    tEnemy.setSpeed(10);
    tEnemy.wriggle = function(){
        newDir = (Math.random() * 90)-45;
        this.changeAngleBy(newDir)
        
        
    }
    tFly.reset = function(){
        //SET NEW RANDOM POSITION
        newX = Math.random() * this.cWidth; 
        newY = Math.random() * this.cHeight;
        this.setPosition(newX, newY);
    }
    tEnemy.reset();
    return tEnemy; 
}

function Ship(){
    
    tShip = new Sprite(scene,  'http://aharrisbooks.net/h5g/h5g_7/frog.png' , 50, 50)
    tShip.minSpeed = -3;
    tShip.maxSpeed = 10;
    tShip.setSpeed(0);
    tShip.setAngle(0);
    
    tShip.checkKeys  = function(){
        
        if(keysDown[K_LEFT]){
            this.changeAngleBy(-5);
        }
        if(keysDown[K_RIGHT]){
            this.changeAngleBy(5);
        }
        if(keysDown[K_UP]){
            this.changeSpeedBy(1);
            if(this.speed > this.maxSpeed){
                this.setSpeed(this.maxSpeed);
            }
        }
        if(keysDown[K_DOWN]){
            this.changeSpeedBy(-1);
            if(this.speed < this.minSpeed){
                this.setSpeed(this.minSpeed);
        }
    }
    }
    return tShip;
    
}