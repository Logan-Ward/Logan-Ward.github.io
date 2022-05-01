// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./Logan-Ward.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array){
    return _.filter(array, obj => obj.gender === 'male').length;
}

var femaleCount = function(array){
    return _.reduce(array, (count, obj) => obj.gender === 'female' ? ++count : count, 0);
}

var oldestCustomer = function(array){
    let oldest = 0;
    let name = '';
    for(let i = 0; i < array.length; i++){
        if(array[i].age > oldest){
            oldest = array[i].age;
            name = array[i].name;
        }
    }
    return name;
}

var youngestCustomer = function(array){
    let youngest = Infinity;
    let name = '';
    for(let i = 0; i < array.length; i++){
        if(array[i].age < youngest){
            youngest = array[i].age;
            name = array[i].name;
        }
    }
    return name;
}

var averageBalance = function(array){
    let count = 0;
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        let strNum = '';
        for(let j = 0; j < array[i].balance.length; j++){
            console.log(parseInt(array[i].balance[j]));
            if(typeof parseInt(array[i].balance[j]) === 'number' || array[i].balance[j] === '.'){
                strNum += array[i].balance[j];
            }
        }
        console.log(parseFloat(strNum));
        sum += parseFloat(strNum);
        count++;
    }
    console.log(sum);
    return sum / count;
}
console.log(averageBalance(customers));

var firstLetterCount;

var friendFirstLetterCount;

var friendsCount;

var topThreeTags;

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
