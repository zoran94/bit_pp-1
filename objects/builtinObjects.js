'use strict'

// // TASK 1 - Write a function to convert a number from one base(radix) to another.
// //     Hint: Use one of the built -in functions and toString method of one of the built -in Object Wrappers;

// // 'ff', 16, 8 -> 377

// function convertNum(num, radix1, radix2) {
//     var a = parseInt(num, radix1);
//     var b = a.toString(radix2);
//     return b;
// }

// console.log(convertNum('ff', 16, 8));


// // TASK 2 - Write a JavaScript function that reverses a number.typeof result of the function should be “number”.

// // 12345 -> 54321

// function reverseNum(num) {
//     var numToStr = new String(num);
//     var output = "";
//     for (var i = numToStr.length - 1; i >= 0; i--) {
//         output += numToStr[i];
//     }
//     return Number(output);
// }

// console.log(reverseNum(12345));


// // TASK 3 - Write a JavaScript function that returns a passed string with letters in alphabetical order.
// //     Note: Assume punctuation, numbers and symbols are not included in the passed string.

// // “Webmaster” -> “abeemrstw”

// function alphabetical(str) {
//     return str.toLowerCase().split("").sort().join("");
// }

// console.log(alphabetical("Webmaster"));


// // TASK 4 - Write a function to alphabetize words of a given string.Alphabetizing a string means rearranging the letters so they are sorted from A to Z.

// // 	"Republic Of Serbia" -> "Rbceilpu Of Sabeir"

// function alphabetize(str) {
//     var words = str.split(" ");
//     var output = [];
//     for (var i = 0; i < words.length; i++) {
//         output[i] = words[i].split("").sort().join("");
//     }
//     return output.join(" ");
// }

// console.log(alphabetize("Republic Of Serbia"));


// // TASK 5 - Write a function to split a string and convert it into an array of words.

// // 	"John Snow" -> ['John', 'Snow']

// function splitString(str) {
//     return str.split(" ");
// }

// console.log(splitString("John Snow"));


// // TASK 6 - Write a function to convert a string to its abbreviated form. 

// // 	"John Snow" -> "John S."

// function convertAbbr(str) {
//     var words = str.split(" ");
//     var abbr = words[1].split("");

//     abbr.length = 2;
//     abbr.splice(1, 1, ".")

//     return words[0] + " " + abbr.join("");
// }

// console.log(convertAbbr("John Snow"));


// // TASK 7 - Write a function that can pad(left, right) a string to get to a determined length.

// // 	'0000', 123, 'l' -> 0123
// // '00000000', 123, 'r' -> 12300000

// function pad(str, num, dir) {
//     if (dir === 'l') {
//         return (str + num).slice(-str.length);
//     } else if (dir === 'r') {
//         return (num + str).substring(0, str.length);
//     }
// }

// console.log(pad('0000', 123, 'l'));
// console.log(pad('00000000', 123, 'r'));


// // TASK 8 - Write a function to capitalize the first letter of a string and returns modified string.

// // "js string exercises" -> "Js string exercises"

// function capitalizeFirstLetter(str) {
//     return str.charAt(0).toUpperCase() + str.slice(1);
// }

// console.log(capitalizeFirstLetter("js string exercises"));


// // TASK 9 - Write a function to hide email addresses to protect them from unauthorized users.

// // 	"somerandomaddress@example.com" -> "somerand...@example.com"

// function hideEmail(str) {
//     var et = str.indexOf('@');
//     return "....." + str.slice(et);
// }

// console.log(hideEmail("somerandomaddress@example.com"));


// // TASK 10 - Write a program that accepts a string as input and swaps the case of each character.For example, if you input 'The Quick Brown Fox', the output should be 'tHE qUICK bROWN fOX'.
// // var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// // var LOWER = 'abcdefghijklmnopqrstuvwxyz';

// // "The Quick Brown Fox" -> "tHE qUICK bROWN fOX"

// function swapChar(str) {
//     var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     var LOWER = 'abcdefghijklmnopqrstuvwxyz';
//     var res = [];

//     for (var i = 0; i < str.length; i++) {
//         if (UPPER.indexOf(str[i]) !== -1) {
//             res.push(str[i].toLowerCase());
//         } else if (LOWER.indexOf(str[i]) !== -1) {
//             res.push(str[i].toUpperCase());
//         } else {
//             res.push(str[i]);
//         }
//     }

//     return res.join("");
// }

// console.log(swapChar("The Quick Brown Fox"));