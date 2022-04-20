/*
DATA TYPES:

0. Intro
Data types are descriptions of values in Javscript that help categorize them and the operations that can be done on them.
The typeof operator will return the data type of its operand.

1. Number
Numbers are simple data types that can be whole, fractional, positive, and/or negative numeric values. 
*/

var num = -2.5; // Initializing a variable to a number data type
console.log(typeof num); // Prints "number" to the console because -2.5 is a number data type

/*
2. String
Strings are simple data types comprised of characters and are surrounded by single or double quotes.
*/

var str = 'Hello World!'; // Initializing a variable to a string data type
console.log(typeof str); // Prints "string" to the console because 'Hello World!' is a string data type

/*
3. Boolean
Booleans are simple data types that are either true or false.
*/

var bool = true; // Initializing a variable to the boolean data type
console.log(typeof bool); // Prints boolean to the console because true is a boolean data type

/*
4. Array
Arrays are complex object data types that are indexed collections of simple and/or complex data, 
delimited by commas and contained by brackets. The method Array.isArray() will tell you if an 
object is specifically an array by returning a true or false value.
*/

var arr = [1, 2, 3]; // Initializing a variable to the array data type
console.log(typeof arr); // Prints "object" to the console because arrays are a sub-type of objects
console.log(Array.isArray(arr)); // Prints true to the console because [1, 2, 3] is an array data type

/*
5. Object
Objects are complex data types that are keyed collections of simple and/or complex data, delimited by
commas and contained by braces.
*/

var obj = {key1: 2,
           key2: 'light',
           key3: true}; // Initializing a variable to the object data type
console.log(typeof obj); // Prints "object" to the console because the obj variable contains an object

/*
6. Function
Functions are complex data types that contain a set of statement to perform every time the function is
called. Functions are comprised of a name, parameter(s), a code block, and optionally a return statement.
Functions will return undefined by default.
*/

var func = function(param){ // Declaring a function named func with one parameter named param
    return param; // Returning the param parameter to the function call
}
console.log(typeof func); // Prints "function" to the console because func contains a function

/*
7. undefined
Undefined is a simple data type comprised of one value: undefined. Undefined is the default value for 
unassigned variables or functions that end without returning any value.
*/

var undef; // Declaring a variable without assigning it a value
console.log(typeof undef); // Prints "undefined" to the console because undef is undefined by default

/*
8. null
Null is a simple data type comprised of one value: null. Null is a value used to intentionally 
denote that a variable is empty. Typeof does not work properly on null as it will return object.
*/

var emptyVar = null; // Initializing a variable to the null data type
console.log(emptyVar); // Prints "null" to the console because emptyVar contains a value of null

/*
9. NaN
NaN is a simple data type  comprised of one value: NaN. NaN means "not a number" and is a sub-type of 
the number data type. NaN is the value used when a number operation resolves to or includes a NaN value,
such as the square root of -1.
*/

var notNum = NaN; // Initializing a variable to the NaN data type
console.log(typeof notNum); // Prints "number" to the console because NaN is a sub-type of the number data type
console.log(notNum); // Prints "NaN" to the console because notNum contains a value of NaN

/*
10. Infinity and -Infinity
Infinity and -Infinity are each simple number data types comprised of values that go by the same name. Infinity
is used to represent positive infinity in mathematical operations and always evaluates to greater than any other 
number. The reverse is true of -Infinity, where it is less than any number it is compared to and is used to 
represent negative infinity. They are both subtypes of the number data type.
*/

var infin = Infinity; // Initializing a variable to the Infinity data type
console.log(typeof infin); // Prints "number" to the console because Infinity is a sub-type of the number data type
console.log(infin); // Prints "Infinity" to the console because the infin variable contains a value of Infinity

/*
11. Primitive vs Complex
Primitive data types are immutable values that are not objects and do not have methods. They are also copied by value 
when assigned or passed between variables. Complex data types are mutable values that are passed by reference  when 
assigned or passed between variables.
*/

/*
12. Pass by Copy vs Reference
Pass by Copy means that values of this type will be duplicated when passed or assigned into new variables. This is 
possible because primitive data types occupy a defined amount of memory that variables are able to hold. Pass by 
References means that values of this type will be pointed to by variables, and have their "location" passed or 
assigned to new variables. This is because complex data types occupy and indefinite amount of memory, so variables can 
only store a reference to the value's location in memory.
*/

var firstNum = 1; // Initializing a variable to 1
var firstArr = []; // Initializing a variable to an empty array
var secondNum = firstNum; // Passing a copy of the value in firstNum to secondNum
var secondArr = firstArr; // Passing the location of the empty array in firstArr to secondArr
secondNum = 4; // Reassigning secondNum to 4
secondArr.push('pie'); // Manipulating the array at the location stored in secondArr
console.log(firstNum); // Prints "1" to the console because the contents of the firstNum variable are not altered
console.log(firstArr); // Prints "['pie']" to the console because the value referenced by firstArr was altered by secondArr