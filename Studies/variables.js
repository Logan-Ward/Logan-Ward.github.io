/*
VARIABLES:

0. Intro
 Variables are named, virtual containers that store either data or the location of data we want to access in our program. Variables can
have the data they contain or reference changed via manipulating the variable. 

1. Declaration  and Assignment
Declaration is when a variable is given a name. The default value for an unassigned variable is undefined.
*/

var myVar; // Declaring a variable named myVar
console.log(myVar); // Prints "undefined" to the console

/*
Assignment is when a variable is given a value through the assignment operator "=". Assignment can happen at declaration or after, and 
when declaration and assignment are done together it is referred to as initialization.
*/

var myVar1; // Declaring a variable named myVar
myVar = 1; // Assigning myVar to a value of 1
var myVar2 = 'string'; // Initializing myVar2 to a value of "string"
console.log(myVar1); // Prints "1" to the console
console.log(myVar2); // Prints "string" to the console

/* 
Assignment can occur multiple times as a variable is reassigned to new values
*/

var myVar3 = [1, 2, 3]; // Initializing myVar3 to the array [1, 2, 3]
console.log(myVar3); // Prints "[1, 2, 3]" to the console
myVar3 = [1, 2]; // Reassigning myVar3 to a value of [1, 2]
console.log(myVar3); // Prints "[1, 2]" to the console

/*
2. var, let, const
The var keyword is used to declare variables that are local or global-scoped, meaning that if they are declared in a block scope, like 
an if-statement or for-loop, they will be available in the local or global scope that the block scopes are contained within. Var 
variables are also hoisted to the top of their scope, meaning that the name, but not the content of the variable, is accessible from 
the top of the variable's scope even if the declaration of the variable occurs later in the scope.
*/

console.log(name); // Prints "undefined" to the console since the name variable has no value but has been hoisted at this point in the code
var name = 'John'; // Initializing a variable with the var keyword
console.log(name); // Prints "John" to the console since the name variable has been assigned a value at this point in the code
for(var i = 0; i < 10; i++){
    // Declaring a variable i in block scope
}
console.log(i); // Prints "10" to the console since the variable i is global-scoped in this case

/*
The let keyword is used to declare variables that are block scoped, meaning that they exist only within the scope they are declared in and 
are not moved higher like the var variables. Let variables are not hoisted either.
*/

// console.log(boy); // Will throw an error as boy has not been declared at this point in the code
let boy = true; // Initializing a variable with the let keyword
console.log(boy); // Prints "true" to the console
for(let j = 0; j < 10; j++){
    // Declaring a variable j in block scope
}
// console.log(j); // Will throw an error because the block scoped variable j is not available in the global scope

/*
The const keyword functions similarly to the let keyword in regard to scope and hoisting, but the const keyword has two additional rules: 
const variables must be initialized(declaration and assignment must occur at the same time), and they cannot be reassigned.
*/

// const fish; // Will throw an error because the fish const variable was not assigned a value in its declaration
const whale = 'big'; // Initializing the const variable whale with a value of "big"
console.log(whale); // Prints "big" to the console
// whale = 'small'; // Will throw an error because const variables cannot be reassigned

/*
3. Hoisting
Hoisting is a proccess by which variable names and functions are moved to the top of their scope at runtime. Specifically, variables only 
have their name hoisted while function have their name and body hoisted.
*/

console.log(add(1, 2)); // Prints "3" to the console because the add function was hoisted to the top of the global scope
// Creating the add function
function add(num1, num2){
    return num1 + num2;
}
console.log(dog); // Prints "undefined" to the console because the dog variable name was hoisted but not given a value yet
dog = 'fido';
console.log(dog); // Prints "fido" to the console because the dog variable name was hoisted then assigned a value of "fido"
var dog = 'spot'; // Initializing the dog variable with a value of 'spot'
console.log(dog); // Prints "spot" to the console because the dog variable was reassigned a value of "spot"





