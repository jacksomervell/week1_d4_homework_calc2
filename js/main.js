console.log("hello")

var calcButton = document.getElementById("basic-calc");


  calcButton.addEventListener("click", function(){
   var num1 = document.getElementById("col-sm-2").value
   var op = document.getElementById("basic-operation").value
   var num2 = document.getElementById("col-sm-2").value
      while (isNaN(num1)) {
        num1 = prompt('You must choose an actual number in Number 1!')
      }
      while (isNaN(num2)) {
        num2 = prompt('You must choose an actual number in Number 2!')
      }

      if (op === "+") {
        console.log(num1 + num2);
      }
      if (op === "-") {
        console.log(num1 - num2);
      }
      if (op === "/") {
        console.log(num1 / num2);
      }
      if (op === "*") {
        console.log(num1 * num2);
      }

   console.log("clicked!"); })