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
            if(array[i].balance[j] !== '$' && array[i].balance[j] !== ','){
                strNum += array[i].balance[j];
            }
        }
        sum += parseFloat(strNum);
        count++;
    }
    return sum / count;
}

var firstLetterCount = function(array, char){
    let count = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i].name[0].toUpperCase() === char.toUpperCase()){
            count++;
        }
    }
    return count;
}

var friendFirstLetterCount = function(array, customer, char){
    let count = 0;
    let customerObj = {};
    for(let i = 0; i < array.length; i++){
        if(array[i].name === customer){
            customerObj = array[i];
            break;
        }
    }
    for(let i = 0; i < customerObj.friends.length; i++){
        if(customerObj.friends[i].name[0].toUpperCase() === char.toUpperCase()){
            count++;
        }
    }
    return count;
}

var friendsCount = function(array, name){
    let arr = [];
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array[i].friends.length; j++){
            if(array[i].friends[j].name === name){
                arr.push(array[i].name);
                break;
            }
        }
    }
    return arr;
}

var topThreeTags = function(array){
    let tagArr = [];
    let tagArrObj = [];
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array[i].tags.length; j++){
            if(tagArr.includes(array[i].tags[j])){
                tagArrObj[array[i].tags[j]] = tagArrObj[array[i].tags[j]] + 1;
            }
            else{
                tagArr.push(array[i].tags[j]);
                tagArrObj[array[i].tags[j]] = 1;
            }
        }
    }
    let first = {};
    let second = {};
    let third = {};
    for(let key in tagArrObj){
        if(tagArrObj[key] > first.value || first.value === undefined){
            third = second;
            second = first;
            first = {
                name : key,
                value : tagArrObj[key]
            }
            console.log(first);
        }
        else if(tagArrObj[key] > second.value){
            third = second;
            second = {
                name : key,
                value : tagArrObj[key]
            }
            console.log(second);
        }
        else if(tagArrObj[key] > third.value){
            third = {
                name : key,
                value : tagArrObj[key]
            }
            console.log(third);
        }
    }
    return [first.name, second.name, third.name];
}

var genderCount = function(array){
   let femaleCount = _.reduce(array, (prev, customer) => customer.gender === 'female' ? prev + 1 : prev, 0);
   let maleCount = _.reduce(array, (prev, customer) => customer.gender === 'male' ? prev + 1 : prev, 0);
   let nonbinary = _.reduce(array, (prev, customer, array) => customer.gender === 'non-binary' ? prev + 1 : prev, 0);
   return {
       'male' : maleCount,
       'female' : femaleCount,
       'non-binary': nonbinary
   };
}

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
