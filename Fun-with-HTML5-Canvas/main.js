document.addEventListener("DOMContentLoaded",function(){
const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 0;

let isDrawing = false;// is flag to tell use when to draw
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e) {
    if(!isDrawing) return;//stop function from running when not mousedown
    // start our line work
    ctx.strokeStyle= `hsl(${hue},100%,50%)`
    ctx.beginPath();
    //start from 0
    ctx.moveTo(lastX,lastY);
    // go to 
    ctx.lineTo(e.offsetX, e.offsetY);
    // creates line
    ctx.stroke();
    [lastX ,lastY ] = [e.offsetX , e.offsetY]// destructure an array
    hue++
    if(hue >= 360){
        hue = 0;
    }
    if(ctx.lineWidth >= 50 || ctx.lineWidth <= 1){
        direction = !direction
    }
    if(direction){
    ctx.lineWidth++
    }else{
        ctx.lineWidth--
    }
}

canvas.addEventListener('mousedown',(e) => {
    isDrawing = true;
    [lastX ,lastY ] = [e.offsetX , e.offsetY]// to update lines at point of mouse down.
} );
canvas.addEventListener('mousemove',draw);
canvas.addEventListener('mouseup',()=> isDrawing = false);
canvas.addEventListener('mouseout',()=> isDrawing = false);




})