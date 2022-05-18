/*
STRING MANIPULATION:

0. Intro
String are sequences of characters that we can manipulate through operators or methods. Strings are bound by single
or double quotes.

1. Operator Manipulation
Strings can be combined using the "+" operator, or they can be combined and assigned using the "+=" operator.
*/

// Initializing a string of "Hello" to the str variable
var str = "Hello"; 
console.log(str + ' World'); // Prints "Hello World" to the console because the two strings were combined by the "+" operator
// Using the "+=" assignment operator to combine the original value of str with the new string and assign the combined value
// to str.
str += ' you';
console.log(str); // Prints "Hello you" to the console

/*
2. Method Manipulation
Strings can also be manipulated through built-in methods that are accessed using the "." operator.
*/

// Initializing a string of "Hi" to the str1 variable
var str1 = "Hi";
// Prints "Hi there neighbor" to the console because the concat method combines the calling string and the given string and 
// returns the result.
console.log(str1.concat(" there neighbor"));
// Prints "H" to the console because the slice method returns the characters in the string starting at the first index and 
// ending just before the second index given.
console.log(str1.slice(0, 1));
// Prints "HI" to the console because the toUpperCase method returns the given string in all upper case
console.log(str1.toUpperCase());