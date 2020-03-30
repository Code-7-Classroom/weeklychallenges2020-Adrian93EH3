// All the array methods are .push(), .shift(), .unshift(), .pop(), .shift() and lastly .splice()
var drinks=[];
var drinks = ["water", "coffee", "tea"]
console.log(drinks);

var foods=[];
var foods = ["apple", "sandwich", "chips"]
console.log(foods);

var meals = drinks.concat(foods);
meals.reverse();
console.log(meals);