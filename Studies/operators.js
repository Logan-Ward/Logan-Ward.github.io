/*
OPERATORS:

0. Intro
Operators are actions that can be done on data. They are represented in javascript by various symbols, 
and fall under different categories of usage.

1. Assignment Operators
Assignment operators assign a value to the left operand based on the right operand. The most common 
assignment operator is "=". The equals sign can be paired with other operators as well to combine
operations such as addition and assignment.
*/

// Using the "=" assignment operator to give the num variable in the left operand the value of two in the right operand
var num = 2; 
console.log(num); // Prints "2" to the console
// Using the "+=" assignment operator to give the num variable in the left operand the value of itself plus three in the 
// right operand
num += 3;
console.log(num) // Prints "5" to the console

/*
2. Arithmetic Operators
Arithmetic operators take number values as their operands and return a single number. The most common arithmetic operators
are as follows: "+" is addition, "-" is subtraction, "/" is division, and "*" is multiplication.
*/

var num1 = 2 + 3; // Assigning num1 the result of adding the values 2 and 3
console.log(num1); // Prints "5" to the console
num1 = 48 / 6; // Assigning num1 the result of dividing 48 by 6
console.log(num1); // Prints "8" to the console

/*
3. Comparison Operators
Comparison operators compare their operands and return a boolean value based on that comparison. The most common comparison
operators are as follows: "==" returns true if both values are equal, "===" returns true if both values are equal and of
the same data type
