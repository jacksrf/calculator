


//grab values from browser
var num1 = document.querySelector("input#num1");
var num2 = document.querySelector("input#num2");


// var x = parseInt(num1.value);
// var y = parseInt(num2.value);







//addition
var add = document.querySelector("button#add");
var clicked = "click";

var addNum = function() {
  debugger;
  var x = parseInt(num1.value);
  var y = parseInt(num2.value);
  ans = x + y;

    var num3 = document.querySelector("#answer");
    num3.value = ans;
}

add.addEventListener(clicked, addNum);

//subtraction
var sub = document.querySelector("button#subtract");
var clicked = "click";

var subNum = function() {
    var x = parseInt(num1.value);
    var y = parseInt(num2.value);
  ans = x - y;


  var num3 = document.querySelector("#answer");
  num3.value = ans;

}
sub.addEventListener(clicked, subNum);

//division
var div = document.querySelector("button#divide");
var clicked = "click";
var divNum = function() {
    var x = parseInt(num1.value);
    var y = parseInt(num2.value);
  ans = x / y;

  var num3 = document.querySelector("#answer");
  num3.value = ans;
}
div.addEventListener(clicked, divNum);

//multiplication
var mul = document.querySelector("button#multiply");
var clicked = "click";
var mulNum = function() {
    var x = parseInt(num1.value);
    var y = parseInt(num2.value);
  ans = x * y;

  var num3 = document.querySelector("#answer");
  num3.value = ans;
}
mul.addEventListener(clicked, mulNum);
