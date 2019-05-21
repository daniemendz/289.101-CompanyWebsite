/*eslint-env browser*/
/*eslint no-console:0*/
/*

Begin by following the steps in the workshop notes.

Next, add the following features:
- the gap goes red when the puck is over it
- the puck 'teleports' to the opposite boundary when it crosses one (think asteroids/snake)

*/

var puck_x = 210;
var puck_y = 210;
var puck =  document.getElementById('puck');
var speed = 50

function log(){
    console.log('x=' + puck_x + ' y=' + puck_y);
}

function checkCollision(){
    //has the puck landed in the hole?
    //vertical edge of hole
    if (puck_x > 250 && puck_x < 350 && puck_y > 150 && puck_y < 250){
        console.log("AAAHH");
    }
}

function teleport(){
    if (puck_x < 0){
        console.log("WHY");
        puck_x = 580
        puck.style.left= puck_x + "px";
    }
    
    if (puck_x > 600){
        console.log("WHY");
        puck_x = 5
        puck.style.left= puck_x + "px";
    }
    
    if (puck_y < 0){
        console.log("WHY");
        puck_y = 380
        puck.style.top= puck_y + "px";
    }
    
    if (puck_y > 400){
        console.log("WHY");
        puck_y = 10
        puck.style.top= puck_y + "px";
    }
}


puck.style.left = puck_x + 'px';
puck.style.top = puck_y + 'px';


document.getElementById('left').addEventListener('click', function(){
    puck_x -= speed;
    puck.style.left= puck_x + "px";
    log()
    checkCollision()
    teleport()
});
document.getElementById('right').addEventListener('click', function(){
    puck_x += speed;
    puck.style.left= puck_x + "px";
    log()
    checkCollision()
    teleport()
});

document.getElementById('up').addEventListener('click', function(){
    puck_y -= speed;
    puck.style.top= puck_y + "px";
    log()
    checkCollision()
    teleport()
});
document.getElementById('down').addEventListener('click', function(){
    puck_y += speed;
    puck.style.top= puck_y + "px";
    log()
    checkCollision()
    teleport()
});


