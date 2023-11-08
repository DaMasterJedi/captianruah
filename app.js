var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;    

var countDownDate = new Date("Dec 31, 2023 17:30:00").getTime();
var context = canvas.getContext('2d')

var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();
      
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
      
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
    // Output the result in an element with id="demo"
    context.font = "100px"
    document.getElementById("CountDown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  }, 1000);





console.log("I am logging");

context.font = "100px solid";
context.fillStyle = "gray"
context.fillRect(375, 400, 700, 100)
context.fillRect(550, 290, 360, 100) 
context.fillStyle = "black"
context.fillText("Date:", 600, 375);


context.fillStyle = "blue"
context.fillRect(0, 0,2900, 100)
context.fillStyle = "black"
context.fillText("CaptainRuah's Website", 175, 85);
