var Mouseevent;
var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");
var lastx;
var lasty;
canvas.addEventListener("mousedown",mousedown);
function mousedown(e){
    Mouseevent="mousedown";
}
canvas.addEventListener("mouseup",mouseup);
function mouseup(e){
    Mouseevent="mouseup";
}
canvas.addEventListener("mouseleave",mouseleave);
function mouseleave(e){
    Mouseevent="mouseleave";
}
canvas.addEventListener("mousemove",mousemove);
function mousemove(e){
    var currentx=e.clientX-canvas.offsetLeft;
    var currenty=e.clientY-canvas.offsetTop;
    if(Mouseevent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=document.getElementById("color").value;
        ctx.lineWidth=document.getElementById("width").value;
       ctx.arc(currentx, currenty, 40, 0,  2*Math.PI);
        ctx.stroke();
    }
    lastx=currentx;
    lasty=currenty;
}
function lol(){
    document.getElementById("text1").innerHTML=document.getElementById("color").value;
}