var tomHeight = 22.86; // in x 2.54 = 22.86cm
var tomMass =  8; //lbs
var jerryHeight = 10; // cm
var jerryMass = 0.09; // g / 454 = 0.09lbs

var BMITom = tomMass / (tomHeight * tomHeight);
var BMIJerry = jerryMass / (jerryHeight * jerryHeight);
var highBMI = BMITom > BMIJerry;

console.log("Is Tom's BMI higher than Jerry's? " + highBMI);