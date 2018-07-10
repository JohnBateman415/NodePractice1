var _ = require ("lodash");
var fs = require("fs");

var randomNumber = _.random(-6,10);
var textToWrite = "here you text";
var fileContents = fs.readFileSync("server.js","utf-8");

fs.writeFileSync('text.txt', textToWrite);

console.log("random is "+ randomNumber);

console.log(fileContents);
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