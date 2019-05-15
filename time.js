// Set the date we're counting down to
var countDownDate = new Date("Jun 13, 2019 14:10:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24) + 1);
  
  
    
  // Output the result in an element with id="demo"
  document.getElementById("days").innerHTML = days + " days until school is over!";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = "EXPIRED";
  }
}, 1000);
