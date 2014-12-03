


//grab values from browser
var num1 = document.querySelector("div#num1");
var num2 = document.querySelector("div#num2");


// var x = parseInt(num1.value);
// var y = parseInt(num2.value);







//addition
var add = document.querySelector("#add");
var clicked = "click";

var addNum = function(x,y) {
  var x = parseInt(num1.value);
  var y = parseInt(num2.value);
  ans = x + y;

    var num3 = document.querySelector("#answer");
    num3.value = ans;
}

add.addEventListener(clicked, addNum);

//subtraction
var sub = document.querySelector("#subtract");
var clicked = "click";

var subNum = function(x,y) {
    var x = parseInt(num1.value);
    var y = parseInt(num2.value);
  ans = x - y;


  var num3 = document.querySelector("#answer");
  num3.value = ans;

}
sub.addEventListener(clicked, subNum);

//division
var div = document.querySelector("#divide");
var clicked = "click";
var divNum = function(x,y) {
    var x = parseInt(num1.value);
    var y = parseInt(num2.value);
  ans = x / y;

  var num3 = document.querySelector("#answer");
  num3.value = ans;
}
div.addEventListener(clicked, divNum);

//multiplication
var mul = document.querySelector("#multiply");
var clicked = "click";
var mulNum = function(x,y) {
    var x = parseInt(num1.value);
    var y = parseInt(num2.value);
  ans = x * y;

  var num3 = document.querySelector("#answer");
  num3.value = ans;
}
mul.addEventListener(clicked, mulNum);
