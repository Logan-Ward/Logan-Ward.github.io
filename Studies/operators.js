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
Comparison operators compare their operands and return a boolean value based on whether the comparison is true. 
The most common comparison operators are as follows: "==" returns true if both operands are equal, "===" returns 
true if both operands are equal and of the same data type, ">" returns true if the left operand is greater than 
the right operand, "<" returns true if the left operand is less than the right operand, "!=" returns true if both 
operands are not equal, "!==" returns true if both operands are not equal or not of the same data type, ">=" returns 
true if the left operand is greater than or equal to the right operand, and "<=" returns true if the left operand is 
less than or equal to the right operand.
*/

if(1 < 2){ // Compares if 1 is less than 2 and returns true
    console.log("true"); // Prints "true" to the console because the condition was true
}
if(1 >= 2){ // Compares if 1 is greater than or equal to 2 and returns false
    console.log("false"); // This will not print to the console because the condition was false
}

/*
4. Logical Operators
Logical operators return boolean values based on the boolean values of their operands. The three logical
operators are as follows: "||" returns true if any of its operands are true, "&&" returns true if all of 
its operands are true, and "!" returns the opposite boolean value of its single operand.
*/

if(true || false){ // Checks if either true or false are true and returns true
    console.log("true"); // Prints "true" to the console because the condition was true
}
if(true && true){ // Checks if both true and true are true and returns true
    console.log("true"); // Prints "true" to the console because the condition was true
}

/*
5. Unary Operators
Unary operators act on a single operand. The common unary operators are as follows: "!" returns the 
logical negation of its operand, "typeof" returns a string describing the data type of its operand, 
and "++"/"--" which increment or decrement their operand by 1 respectively.
*/

var num2 = 3;
num2++; // Increments the num2 operand by 1
console.log(num2); // Prints "4" to the console
console.log(!true); // Prints "false" to the console because the logical negation of true is false

/*
6. Ternary Operators
Ternary operators act on a set of three operands. The ternary operator is "a ? b : c", and it checks 
if a is true or false, then runs the b code if true or the c code if false.
*/

// Prints "true" to the console because 4 is less than 5 so the b code block runs
4 < 5 ? console.log("true") : console.log("false")
// Prints "false" to the console because 4  is not greater than 5 so the c code block runs
4 > 5 ? console.log("true") : console.log("false")