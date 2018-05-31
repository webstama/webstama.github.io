var ship;
var game;
var starfield;
var missile;
var missiles = [];
var timer;
var enemy;
var enemies;

function Missile(offsetX, offsetY){
    tMissile = new Sprite(game, 'http://aharrisbooks.net/h5g/h5g_8/missile.png', 30, 20);
    
    
    tMissile.fire = function(){
        missiles.push(this);
        this.show();
        this.setSpeed(15);
        this.setPosition(ship.x, ship.y);
        this.setAngle(ship.getImgAngle());
        this.setBoundAction(DIE);
    }
    
    return tMissile;
}

function Ship(){
    tShip = new Sprite(game, 'jet1.png', 25, 25);
    
    tShip.checkKeys = function(){
        if(keysDown[K_LEFT]){
            this.changeImgAngleBy(-5)
        }
        if(keysDown[K_RIGHT]){
            this.changeImgAngleBy(5)
        }
        if(keysDown[K_UP]){
            this.addVector(this.getImgAngle(), .5);
        }
        if(keysDown[K_SPACE]){
            if(timer.getElapsedTime() >= 1){
                missile = new Missile();
                missile.fire();
                timer.reset();
            }
        }
        
        this.addVector(this.getImgAngle(), (this.speed / 20));
    }
    
    tShip.checkDrag = function(){
        speed = this.getSpeed();
        speed *= .95
        this.setSpeed(speed);
    }
    return tShip;
}


function init(){
  game = new Scene();
  starfield = new Sprite(game, 'http://www.solidbackgrounds.com/images/2560x1440/2560x1440-gray-solid-color-background.jpg', 1200, 1200);
  starfield.setSpeed(0);
  ship = new Ship();
  timer = new Timer();
  game.start();
}

function update(){
    game.clear();
    starfield.update();
    ship.checkKeys();
    ship.checkDrag();
    ship.update();
    //FOR EACH LOOP WITH ITERATE THROUGH EACH OBJECT IN AN ARRAY
    missiles.forEach(function(element){
      element.update();  
    })
    
    
}