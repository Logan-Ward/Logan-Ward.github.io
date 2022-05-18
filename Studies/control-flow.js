/*
CONTROL FLOW:

0. Intro
Control flow refers to the order in which the computer will execute the code in a program.

1. If
If statements are conditional statements that will only execute the coide in their code block if the condition at the top is true.
*/

if(5 > 4){ // The conditional statement, this one evaluates to true
// The code block that only is run when the condition is true, this one runs
console.log(true);
}

/*
2. Else-If
Else-If statements can only come after an if or else-if statement. They will only execute if all previous if/else-if statements were false, 
and its own condition is true.
*/

if(4 > 5){ // A false condition
// This code is not run
console.log(false);
}
else if(true === true){ // A true condition
// This code is run
console.log(true);
}

/*
3. Else
Else statements are default code blocks for if/else-if statements. If all the previous if/else-if conditions were false, then the code in the 
else block will run.
*/

if(10 < 4){ // A false condition
// This code is not run
console.log(false);
}
else{ // The default block
// This code is run
console.log(true);
}

/*
4. Switch
Switch statements are conditionals that will execute certain code blocks if a given input matches a certain value in the case list.
*/

let a = 0;
switch(a){ // The value to be checked against the cases
    case 0: // The case value is "0"
    console.log("zero"); // Prints "zero" to the console because the case value matched the input value
    break;
    case 1:
    console.log("one");
    break;
    case 2: 
    console.log("two");
    break;
}