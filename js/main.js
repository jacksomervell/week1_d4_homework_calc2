console.log("hello")

var calcButton = document.getElementById("basic-calc");


  calcButton.addEventListener("click", function(){
   var num1 = document.getElementById("basic-num-1").value
   var op = document.getElementById("basic-operation").value
   var num2 = document.getElementById("basic-num-2").value

      while (isNaN(num1)) {
        num1 = prompt('You must choose an actual number in Number 1!')
      }
      while (isNaN(num2)) {
        num2 = prompt('You must choose an actual number in Number 2!')
      }

      num1 = parseFloat(num1);
      num2 = parseFloat(num2);

      if (op === "+") {
        console.log(num1 + num2);
        var answer = (num1 + num2);
      }
      if (op === "-") {
        console.log(num1 - num2);
        var answer = (num1 - num2);
      }
      if (op === "/") {
        console.log(num1 / num2);
        var answer = (num1 / num2);
      }
      if (op === "*") {
        console.log(num1 * num2);
        var answer = (num1 * num2);
      }

    document.getElementById("basic-answer").className = "show";
    document.getElementById("basic-answer-alert").innerHTML = answer; 
      
   console.log("clicked!"); })

//trip calculator

var calcButton = document.getElementById("trip-calc");

  calcButton.addEventListener("click", function(){
    var dist = document.getElementById("trip-distance").value
    var mpg = document.getElementById("trip-mpg").value
    var cost = document.getElementById("trip-cost").value
    var speed = document.getElementById("trip-speed").value



var time = dist / speed;
      time = Math.round(time * 100) / 100; // round it to two decimals
      var actualMPG = (mpg > 60) ? Math.max(0, mpg - (speed - 60) * 2) : mpg;

      var cost = (dist / actualMPG * cost);
      cost = Math.round(cost * 100) / 100;

    document.getElementById("trip-answer").className = "show";
    document.getElementById("trip-answer-alert").innerHTML = "Your time will be " + time + " miles and your cost will be " + cost; 

});


  //BMI calc

var calcButton = document.getElementById("bmi-calc");

calcButton.addEventListener("click", function(){
    var height = document.getElementById("bmi-height").value
    var mass = document.getElementById("bmi-mass").value
    var units = document.getElementById("bmi-units").value
    
      var mass = parseFloat(mass);
      var height = parseFloat(height);
      console.log(mass, height, mass / Math.pow(height, 2))

      bmi = mass / Math.pow(height, 2);
      bmi = Math.round(bmi * 100) / 100; // round it to two decimals

      // finally, display the result
      document.getElementById("bmi-answer").className = "show";
    document.getElementById("bmi-answer-alert").innerHTML = "Congratulations buddy, your bmi is " + bmi; 
  });
