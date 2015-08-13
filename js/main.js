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
    var dist = document.getElementById("basic-num-1").value
    var mpg = document.getElementById("basic-operation").value
    var cost = document.getElementById("basic-num-2").value
    var speed = document.getElementById("basic-num-2").value



var time = dist / speed;
      time = Math.round(time * 100) / 100; // round it to two decimals
      var actualMPG = (mpg > 60) ? Math.max(0, mpg - (speed - 60) * 2) : mpg;

      var cost = (dist / actualMPG * cost);
      cost = Math.round(cost * 100) / 100;