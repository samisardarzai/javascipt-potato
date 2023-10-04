var con = document.querySelector("#container");
var love= document.querySelector("i");
var sam = document.querySelector("button");

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