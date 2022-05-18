/*
FUNCTIONS:

0. Intro
Functions are code blocks that can be reused with potentially different inputs each time. They consist of a name(sometimes), parameters(sometimes)
and a code block that may or may not have a return statement. When they are called in the code, they can be passed arguments 
corresponding to their parameters.

1. Function Declaration and Calling
Functions must first be declared before they can be executed or called. To declare a function, they must have their name,
parameters, and code block initialized in the code. To call a function, the function's name can be used followed by 
parenthesees that contain the arguments being passed into the function.
*/

function myFunc(something){ // The function declaration
// The reusable function code block
    console.log(something);
    return true; // The value that is returned to the to the function call(undefined by default if no return statement is used)
}
// Function call
console.log(myFunc("It ran")); // Prints "It ran" and "true" to the console as the function runs its console.log and this one 
                               // logs the return value of true to the console

/*
2. Arguments vs Parameters
Function arguments are the values passed into a function at call time. Parameters are the function variables that represent the
arguments inside of the function declaration.
*/

function argVparam(param1, param2){ // The parameters that will contain the values passed into the function at function call
    return param1 + param2;
}
// Prints "7" to the console as the return value for the function is the sum of the arguments 3 and 4
console.log(argVparam(3, 4)); // The arguments of "3" and "4" that are passed into the function

/*
3. Named Function Syntax
function functionName(parameters){
    code block
    return statement
}
*/

function namedFunc(par){
    // code
    return "something";
}

/*
4. Functions Assigned to Variables
Functions can be created and assigned to a variable by using the assignment operator "=".
*/

// Assigns a function to the thisFunction variable
let thisFunction = function(num1, num2){
    return num1 + num2;
}
// Prints "3" to the console by calling the function assigned to the variable thisFunction with the values of "1" and "2"
console.log(thisFunction(1, 2));

/*
5. Parameters and Returns
By default, functions do not need parameters and will return the value "undefined". If a function needs parameters they will
be listed in parenthesees at the function's declaration. If the function needs to return a value, then it will use the return
keyword.
*/

// Defining a function with two parameters
function fullName(first, last){
    return first + " " + last;
}
console.log(fullName('John', 'Smith')); // Prints "John Smith" to the console because the fullName function returned that value

/*
6. Scope
Functions can access variables in parent scopes, but parent scopes cannot access variables in function scopes.
*/

let x = 0;
function incrementx(y){
    x = x + y;
}
incrementx(3);
console.log(x); // Prints "3" to the console because the incrementx function incremented the global variable x by 3
// console.log(y) // Gives an error because parent scopes cannot access variables in contained function scopes

/*
7. Closures
Closures refer to data from functions that have already returned but are still kept around by other functions.
*/

// Declaring a function with a data value that is contained by the function
function closureExample() {
  let closureData = 'closure';
  // Returning a function that references a data value from the parent function's scope
  return function() {
    console.log(closureData);
  };
}
// Storing the returned function in a variable
let newFunction = closureExample();
// Calling the new function
newFunction(); // Prints "closure" to the console because the child function held onto the data from the parent scope 
               // even after the function finished running, an example of closure
