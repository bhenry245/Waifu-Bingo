$(document).ready(function(){
    var img = new Image();
    img.src = "Images/claimedstamp.png";

    var audio = new Audio('SoundEfx/Claimed.mp3');
    var canvas = document.getElementById("bingoCanvas");
    var ctx = canvas.getContext("2d");

    canvas.addEventListener('mousedown', draw);


function draw(e) {
    audio.play();
    var x = Math.round(event.offsetX - img.width/2);
    var y = Math.round(event.offsetY - img.height/2);
    ctx.drawImage(img, x, y);
}




  function init() {
    // code here.
  }




})