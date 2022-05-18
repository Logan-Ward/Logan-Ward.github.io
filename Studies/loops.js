/*
LOOPS:

0. Intro
Loops are code blocks that will run a repeated amount of times depending on the type of loop used. The three types of loops are
for loops, while loops, and for-in loops.

1. Loop types
For loops will loop a set number of times. While loops will loop until their condition is false. For-in loops will loop once for
each key in an object.
*/

// This will loop the code block 10 times
for(let i = 0; i < 10; i++){
    console.log(i); // Will print the numbers 0-9 to the console
}

let bool = false;
// Will loop until the variable bool contains a value of false
while(bool === false){
    bool = true;
    console.log(bool); // Will print "true" to the console
}

let obj = {
    name: 'my name',
    age: 'my age',
    etc: 'etcetera'
}
// This will loop 3 times, once for each of the keys in the obj object
for(let key in obj){
    console.log(key); // Prints the three keys of the obj object to the console
}

/*
2. Looping Forward and Backwards
The previous for loop example showed how to loop forwards a certain number of 
times, by setting the initial variable to zero, the limit to the number of 
intended iterations, and incrementing the counting variable by 1 on each iteration.
Using similar logic, for loops can be used to count down from one number to another.
*/

// This will loop 10 times as the i variable counts down from 10 to 0
for(let i = 10; i > 0; i--){
    console.log(i); // Prints the numbers 10-1 to the console
}

/*
3. Looping Over an Array
Arrays can be looped over by accessing the length of the array in the loop conditions.
*/

let arr = ['A', 'B', 'C', 'D'];
// This will loop once for each element in the arr array
for(let i  = 0; i < arr.length; i++){ // arr.length will return the number of elements in the array
    console.log(arr[i]); // Prints the elements of the array to the console
}

// This will loop once for each element in the arr array in reverse
for(let i = arr.length - 1; i >= 0; i--){ // Since arrays are zero-indexed, i will be set to one less than the array's length
    console.log(arr[i]); // Prints the elements of the array to the console in reverse
}

/*
4. Looping Over an Object
The for-in loop can be used to loop over each key-value pair in an object.
*/

let obj2 = {
    name: 'my name',
    age: 'my age',
    etc: 'etcetera'
}
// This will loop 3 times, once for each of the keys in the obj2 object
for(let key in obj2){
    console.log(obj2[key]); // Prints the three values of the obj2 object to the console
}