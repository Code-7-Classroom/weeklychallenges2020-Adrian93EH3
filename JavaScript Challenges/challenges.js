// very easy //
alert("These are my challenges for the week, all my challenges are in the console log.")
console.log("======================================")
console.log("VERYEASY")
console.log("======================================")
var num1 = 6;
var num2 = 2;
var difference = num1 - num2;
console.log('The difference between ' + num1 + ' and ' + num2 + ' is ' + difference);

// easy //
console.log("======================================")
console.log("EASY")
console.log("======================================")
var firstName = "Adrian";
var secondName = "Diaz";

console.log (firstName, "Is Shorter Than", secondName, "By 2 Letters");

// medium //
alert("This is my medium challenge")
console.log("======================================")
console.log("MEDIUM")
console.log("======================================")
var input = prompt ("Enter A Word ");

if (input === input.toUpperCase()) {
  console.log("YOU ARE SHOUTING")
} else if (input === input.toLowerCase()) {
  console.log("you are whispering");
} else{
  console.log("You are speaking normally")
}

// hard //
console.log("======================================")
console.log("HARD")
console.log("======================================")

function add(num1, num2) {
    return num1 + num2;
  }
  console.log(add(9, 10));
  
  function subtract(num1, num2) {
    return num1 - num2
  }
  console.log(subtract(11, 10));
  
  function multiply(num1, num2) {
    return num1 * num2;
  }
  console.log (multiply(10,13));
  
  function divide(num1, num2){
    return num1 / num2;
  }
  console.log(divide(12, 6));

// very hard //
alert("This is my Very Hard challenge")
console.log("======================================")
console.log("VERYHARD")
console.log("======================================")
var inputNum1 = prompt ("Enter A Number");
var inputNum2 = prompt ("Enter Another Number");
var inputOperator = prompt ("Please Enter An Operator");

switch(inputOperator.toString()){
  case '+':
    console.log(parseInt(inputNum1) + parseInt(inputNum2));
    break;
  case '-':
    console.log(parseInt(inputNum1) - parseInt(inputNum2));
    break;
  case '*':
    console.log(parseInt(inputNum1) * parseInt(inputNum2));
    break;
  case '/':
    console.log(parseInt(inputNum1) / parseInt(inputNum2));
    break;
}