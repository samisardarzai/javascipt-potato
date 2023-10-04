var con = document.querySelector("#container");
var love= document.querySelector("i");
var sam = document.querySelector("button");

var main = document.querySelector(".main");
var crsr= document.querySelector(".cursur");
main.addEventListener("mousemove",function (dets) {
    console.log(dets)
    crsr.style.left= dets.x+"px";
    crsr.style.top= dets.y+"px";
    
})

con.addEventListener("dblclick",function () {
    
    love.style.transform= "translate(-50%,-50%) scale(1)"
    love.style.opacity= 0.8;
    setTimeout(function () {
        love.style.opacity= 0;
       },3000);
    setTimeout(function () {
     love.style.transform= "translate(-50%,-50%) scale(0)";
    },3000);
    
})

sam.addEventListener("dblclick",function () {
    
    love.style.transform= "translate(-50%,-50%) scale(1)"
    love.style.opacity= 0.8;
    setTimeout(function () {
        love.style.opacity= 0;
       },3000);
    setTimeout(function () {
     love.style.transform= "translate(-50%,-50%) scale(0)";
    },3000);
    
})



