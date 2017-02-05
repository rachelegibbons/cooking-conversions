var multiply = function(number1, number2) {
	return number1 * number2;
};

var number1 = parseInt(prompt("How many gallons?"));
var number2 = 3.785411784;

var result = multiply(number1,number2);

alert(number1 + " gallons is " + result + " liters");

var tablespoons = function(numer1,number2) {
	return number1 * number2
};

var number1 = parseInt(prompt("How many cups?"));
var number2 = 16;

var tablespoonResult = tablespoons(number1,number2);

alert(number1 + " cups is " + tablespoonResult + " tablespoons");
