var countDownDate = new Date("Jun 13, 2019 13:10:0").getTime();

// Update the count down every 1 second
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

  // Display the result in the element with id="demo"
  document.getElementById("days").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s until school ends!";

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = "School is over!";
  }
}, 1000);
