// // TASK 1 - Write a function that converts an array of strings into an array of numbers.Filter out all non - numeric values

// function convertToNum(arr) {
//     var outputArr = [];

//     for (var i = 0; i < arr.length; i++) {

//         var elem = arr[i];
//         var elemToFloat = parseFloat(elem);

//         if (typeof elemToFloat === "number" && elemToFloat !== Infinity && !isNaN(elemToFloat)) {
//             outputArr[outputArr.length] = elemToFloat;
//         }
//     }

//     return outputArr;
// }

// var inputArr = ["1", "21", undefined, "42", "1e+3", Infinity];
// var result = convertToNum(inputArr);
// console.log(result);


// // TASK 2 - Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.


// function joinElements(arr) {
//     var outputStr = "";

//     for (var i = 0; i < arr.length; i++) {
//         var elem = arr[i];

//         if (!isNaN(elem) && elem !== Infinity && elem !== undefined && elem !== null && elem !== undefined) {
//             outputStr += elem;
//         }
//     }

//     return outputStr;
// }

// var inputArr = [NaN, 0, 15, false, -22, '', undefined, 47, null];
// var result = joinElements(inputArr);
// console.log(result);


// // TASK 3 - Write a program to filter out falsy values from the array.

// function filterOutFalsy(arr) {
//     var outputArr = [];
//     for (var i = 0; i < arr.length; i++) {
//         var elem = arr[i];
//         if (elem) {
//             outputArr[outputArr.length] = elem;
//         }
//     }
//     return outputArr;
// }

// var inputArr = [NaN, 0, 15, false, -22, '', undefined, 47, null];
// var result = filterOutFalsy(inputArr);
// console.log(result);


// // TASK 4 - Write a program that calculates a number of integer values in the array.

// function isInteger(num) {
//     if (parseInt(num) === num) {
//         return true;
//     }
//     return false;
// }

// function numOfInt(arr) {
//     var count = 0;

//     for (var i = 0; i < arr.length; i++) {
//         var elem = arr[i];

//         if (elem && isInteger(elem)) {
//             count++;
//         }
//     }
//     return count;
// }

// var inputArr = [NaN, 23.1, 15, false, -22.5, '', 4, 7, null];
// var result = numOfInt(inputArr);
// console.log(result);


// // TASK 5 - Write a program that calculates a number of float values in the array.

// function isFloat(num) {
//     numInt = parseInt(num);
//     if (num % numInt === 0) {
//         return false;
//     } else {
//         return true;
//     }
// }


// function numOfFloats(arr) {
//     var count = 0;

//     for (var i = 0; i < arr.length; i++) {
//         var elem = arr[i];

//         if (elem && isFloat(elem)) {
//             count++;
//         }
//     }
//     return count;
// }

// var inputArr = [NaN, 23.1, 15, false, -22.5, '', 4, 7, null];
// var result = numOfFloats(inputArr);
// console.log(result);


