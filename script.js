var timer=60;
var score=0;
var no=0;

function makeBubble(){
var clutter="";
for(var i =0;i<=188;i++)
{
    var rn =Math.floor(Math.random()*10);
    clutter +=`<div class="bubble">${rn}</div>`
}
document.querySelector("#pbtm").innerHTML=clutter;
}

function runTimer(){
    
   var timeint= setInterval(function(){
        if(timer>0){
        timer--;
        document.querySelector("#timerval").textContent=timer;}
        else{
            clearInterval(timeint);
            document.querySelector("#pbtm").innerHTML=`<h1>Game over</h1>`;
        }
    
    },1000);
}

function getNewHit()
{
    no=Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=no;
}
function increaseScore()
{
    score +=10;
    document.querySelector("#Inscore").textContent = score;
    
}
document.querySelector("#pbtm").addEventListener("click",function(dets){
   var clickedno=Number(dets.target.textContent);
   if(clickedno === no)
   {
    increaseScore(); 
    makeBubble();
    getNewHit();


   }
   
})

runTimer();
makeBubble();
getNewHit();

    

