var _ = require ("lodash");
var fs = require("fs");
var person = {
    // javascript object requires key and value
    isLoggedIn: false,
    currentItems: ['shoes','sword','armor'],
    username: 'chamption2',
    battleCry: function () {
        console.log('Yarg!!!');
    } //end of battlecry function... if I need another function, I have to separate this datum
    // from the next datum with a comma
    ,  // usually this is after } as in },*
    addition: function () {
        console.log('addition worked');
    } //end of addition function
}; // end of person object

var convertedObject = JSON.stringify(person);
console.log(convertedObject);

var randomNumber = _.random(-6,10);
var textToWrite = "here you text";
var fileContents = fs.readFileSync("server.js","utf-8");

fs.writeFileSync('text.txt', textToWrite);

//console.log("random is "+ randomNumber);

//console.log(fileContents);

/*
console.log(" ...................this is server.js file.................");

var str1 = "bigg";
var str2 = "bad";
var n1 = 1;
var n2 = 2;

console.log(n1 + n2);
console.log("total is: " + n1 + n2);
console.log(str1 +" " + str2);
console.log(Number(n1) + Number(n2));
*/

person.battleCry();
person.addition();

