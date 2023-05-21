document.getElementById('timer').innerHTML =
  01 + ":" + 00
startTimer();
var x = document.cookie;
var something = x.split(";")[0];
var cookie = something.replace('hs=','');
if (typeof cookie === 'string' || cookie instanceof String) {
  //pass
} else {
  cookie = "0"
}
document.getElementById('cookie').innerHTML = cookie
var game = true;

function startTimer() {
  var presentTime = document.getElementById('timer').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}
  if(m<0){
    var x = document.cookie;
    var something = x.split(";")[0];
    var cookie = something.replace('hs=','');
    if (typeof cookie === 'string' || cookie instanceof String) {
      //pass
    } else {
      cookie = "0"
    }
    
    if (document.getElementById('score').innerHTML > 
    cookie){
      document.cookie = `hs=${document.getElementById('score').innerHTML}; expires=Thu, 18 Dec 4000 12:00:00 UTC`;
    }
    can=document.getElementById('myCanvas');
    can.style.background='red';
    can.style.color='black';
    can.style.fontSize='60px';
    can.style.textShadow='0.5px 1px 1.5px black';
    can.style.opacity='100%';
    can.style.textAlign='center';
    can.innerHTML='The game ENDED!!!'
    return;
  } 
  document.getElementById('timer').innerHTML =
    m + ":" + s;
  setTimeout(startTimer, 1000);
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; 
  if (sec < 0) {sec = "59"};
  return sec;
}
var score = 0;
document.getElementById('score').innerHTML =
  score
function scorechange() {
  if (game == true) {
    score = score + 1
    document.querySelector(".button").style.
    top = Math.floor(Math.random() * 300)+"px";
    document.querySelector(".button").style.
    left = Math.floor(Math.random() * 1150)+"px";
    document.getElementById('score').innerHTML =
    score
  }
}
