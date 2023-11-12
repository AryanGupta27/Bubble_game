var time = 60;
var score=0;
var hitVal=0;

function getNewHit(){
  hitVal=Math.floor(Math.random()*10);
  document.querySelector("#hit-val").textContent=hitVal;
}

function makeBubble() {
  var clutter = "";
  for (var i = 1; i <= 168; i++) {
    var val = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${val}</div>`;
  }
  document.querySelector("#sec-body").innerHTML = clutter;
  clutter = window.matchMedia("(max-width: 600px)");
  
  var hit = Math.floor(Math.random() * 10) + 1;
  document.querySelector("#hit-box").innerHTML = hit;
}

function runTimer() {
  var timer=setInterval(function () {
    if (time > 0) {
      time--;
      document.querySelector("#timer-val").textContent = time;
    }
    else{
      clearInterval(timer); // clearing the setinterval
      document.querySelector("#sec-body").innerHTML=`<H1>Game Over!!</H1>`;
    }
  }, 1000);
}

function increaseScore(){
  score+=10;
  document.querySelector("#score-val").textContent=score;
}

document.querySelector("#sec-body").addEventListener("click",function(event){
  var clickedBubble= Number(event.target.textContent);// we need only the text content of that div

  if(clickedBubble===hitVal){
    increaseScore();
    getNewHit();
    makeBubble();

  }
  
})

document.querySelector(".btn").addEventListener("click",function(){

  document.querySelector(".btn1").innerHTML="";
  runTimer();
  getNewHit();
  makeBubble();


})
  