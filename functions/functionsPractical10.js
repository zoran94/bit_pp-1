'use strict'

// // TASK 1 - Write IIFE that replaces the first and the last element of the given array and prints out its elements.
// // Input array: [4, 5, 11, 9]
// // Output array: [ 9, 5, 11, 4]

// (function (a) {
//     var temp = a[0];
//     a[0] = a[a.length - 1];
//     a[a.length - 1] = temp;
//     return console.log(a);
// })([4, 5, 11, 9]);


// // TASK 2 - Write IIFE that calculates the surface area of the given rectangle with sides a and b. 
// // Input: 4 5
// // Output: 20 

// (function (a, b) {
//     return console.log(a*b);
// })(4, 5);


// // TASK 3 - Write IIFE that replaces all appearances of the letters m or M with * and returns the number of replacements. 
// // Input: prograMming
// // Output: progra**ing, 2

// (function (input) {
//     var output = "";
//     var count = 0;
//     for (var i = 0; i < input.length; i++) {
//         if (input[i] === "M" || input[i] === "m") {
//             output += "*";
//             count++;
//             continue;
//         }
//         output += input[i];
//     }
//     console.log(output + ", " + count);
// })("prograMming");


// // TASK 4 - Write a function with parameters name and surname that returns a function that suggests an email in the form name.surname@gmail.com. 
// // Input: pera peric
// // 	Output: pera.peric@gmail.com

// function suggest (name, surname) {
//     return (function (n, s) {
//         return n + "." + s + "@gmail.com";
//     })(name, surname);
// }

// console.log(suggest("pera", "peric"));


// // TASK 5 - Write a function that returns a function that calculates a decimal value of the given octal number.
// // Input: 034
// // Output: 28

// function calcDecimal(oct) {
//     return (function (num) {
//         var numStr = "" + num;
//         var res = 0;
//         for (var i = numStr.length - 1, j = 0; i >= 0; i--, j++) {
//             res += 8 ** j * numStr[i];
//         }
//         return res;
//     })(oct);
// }

// console.log(calcDecimal("034"));

// var a = 0;
// var b = "034";
// for (var i = b.length - 1, j = 0; i >= 0; i--, j++) {
//     a += 8 ** j * b[i];
// }
// console.log(a);


// // TASK 6 - Write a function that checks if a given string is valid password. The password is valid if it is at least 6 characters long and contains at least one digit. The function should receive two callbacks named successCallback and errorCallback that should be called in case password is correct or invalid. 
// // Input: JSGuru 
// // Output: Your password is invalid!

// // 	Input: JSGuru123
// // 	Output: Your password is cool! 

// function successCallback() {
//     return "Your password is cool!";
// }

// function errorCallback() {
//     return "Your password is invalid!";
// }

// function validPassword(pass, func1, func2) {
//     if (pass.length > 5) {
//         for (var i = 0; i < pass.length; i++) {
//             if (pass[i] / 1) {
//                 return func1();
//             }
//         }
//         return func2();
//     }
//     return func2();
// }

// console.log(validPassword("asasdasd5as", successCallback, errorCallback));


// // TASK 7 - Write a function that filters elements of the given array so that they satisfy a condition given by the callback function.
// // Input: [2, 8, 11, 4, 9, 3], callback function checks if the number is odd
// // Output: [11, 9, 3]

// function isOdd(num) {
//     if (num % 2 === 1) {
//         return true;
//     }
//     return false;
// }

// function filter(arr, func) {
//     var output = [];
//     for (var i = 0; i < arr.length; i++) {
//         if (func(arr[i])) {
//             output[output.length] = arr[i];
//         }
//     }
//     return output;
// }

// console.log(filter([2, 8, 11, 4, 9, 3], isOdd));