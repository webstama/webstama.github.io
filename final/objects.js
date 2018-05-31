var scene;
var enemy;
var frog;
var ribbit;
var enemies;
var NUMENEMIES = 3;
var MAXTIME = 10;
var timer;
var time;
var gui;
var score = 0;

function checkCollisions(indexEnemy){
    if(ship.collidesWith(enemies[indexEnemy])){
        ribbit.play();
        enemies[indexEnemy].reset();
        score += 10;
    }
}

function setupEnemies(){
    enemies = [];
    for(var i = 0; i< NUMENEMIES; i++){
        enemies.push(new Enemy());
    }
}

function checkTime(){
    time = timer.getElapsedTime();
    if(time > MAXTIME){
        scene.stop();
    }
}

function updateGUI(){
    gui.innerHTML = "Score: " + score + " Time: " + time;
}

function restart(){
    //document.location.href = "";
    time = 0;
    timer.reset();
    score = 0;
    scene.start();
}
//Sets the scene, calls the update function, creates the Sprites 
function init(){
    gui = document.getElementById('gui');
    timer = new Timer();
    scene = new Scene();
    scene.setBG("green");
    scene.setSize(300,400);
    setupEnemies();
    ship = new Ship();
    scene.start();
}

//Makes things MOVE, draws things to the canvas, 
function update(){
        //Clears the scene so we have clean movement
        scene.clear();
        checkTime();
        updateGUI();       
        //MOVE THINGS
        
        for(var i = 0; i < enemies.length; i++){
            enemies[i].wriggle();
            checkCollisions(i);
            enemies[i].update();
        }
        
        ship.checkKeys();
        //REDRAW THINGS
        ship.update();
        
}
