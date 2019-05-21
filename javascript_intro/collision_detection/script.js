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


puck.style.left = puck_x + 'px';
puck.style.top = puck_y + 'px';


document.getElementById('left').addEventListener('click', function(){
    puck_x -= speed;
    puck.style.left= puck_x + "px";
});
document.getElementById('right').addEventListener('click', function(){
    puck_x += speed;
    puck.style.left= puck_x + "px";
});

document.getElementById('up').addEventListener('click', function(){
    puck_y -= speed;
    puck.style.top= puck_y + "px";
});
document.getElementById('down').addEventListener('click', function(){
    puck_y += speed;
    puck.style.top= puck_y + "px";
});

