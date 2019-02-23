// // TASK 1 - Write a
// // function to count vowels in a provided string
// // Vowels are a, e, i, o, and u as well as A, E, I, O, and U.

// function countVowels(str) {
//     var count = 0;
//     for (var i = 0; i < str.length; i++) {
//         if (str[i] === "a" || str[i] === "A") {
//             count++;
//             continue;
//         } else if (str[i] === "e" || str[i] === "E") {
//             count++;
//             continue;
//         } else if (str[i] === "i" || str[i] === "I") {
//             count++;
//             continue;
//         } else if (str[i] === "o" || str[i] === "O") {
//             count++;
//             continue;
//         } else if (str[i] === "u" || str[i] === "U") {
//             count++;
//             continue;
//         }
//     }
//     return count;
// }

// console.log(countVowels("BlAa"));


// // TASK 2 - Write a
// // function that combines two arrays by alternatingly taking elements.

// // [‘a’, ’b’, ’c’], [1, 2, 3] - > [‘a’, 1, ’b’, 2, ’c’, 3]

// function combineTwoArr(arr1, arr2) {
//     var outputArr = [];
//     for (var i = 0, j = 0, k = 0; i < arr1.length; i++, j++, k++) {
//         outputArr[k] = arr1[i];
//         k++;
//         outputArr[k] = arr2[j];
//     }
//     return outputArr;
// }

// var result = combineTwoArr(['a', 'b', "c"], [1, 2, 3]);
// console.log(result);


// // TASK 3 - Write a
// // function that rotates a list by k elements.

// // For example[1, 2, 3, 4, 5, 6] rotated by two becomes[3, 4, 5, 6, 1, 2]

// function rotate(arr, k) {
//     var outputArr = [];
//     for (var i = k, j = 0; i < arr.length; i++, j++) {
//         outputArr[j] = arr[i];
//     }

//     for (var i = outputArr.length, j = 0; i < arr.length; i++, j++) {
//         outputArr[i] = arr[j];
//     }
//     return outputArr;
// }

// console.log(rotate([1, 2, 3, 4, 5, 6], 2));


// // TASK 4 - Write a function that takes a number and returns array of its digits.

// function retDigits(num) {
//     var numToStr = "" + num;
//     var arrStr = [];

//     for (var i = 0; i < numToStr.length; i++) {
//         arrStr[i] = parseInt(numToStr[i]);
//     }
//     return arrStr;
// }

// var result = retDigits(52);
// console.log(result);


// // TASK 5 - Write a program that prints a multiplication table for numbers up to 12.

// function multiplicationTable(num) {
//     var outputArr = "";
//     for (var i = 1; i <= num; i++) {
//         for (var j = 1; j <= num; j++) {
//             outputArr += "|" + j*i + "| ";
//         }
//         outputArr += "\n";
//     }
//     return outputArr;
// }

// console.log(multiplicationTable(12));


// // TASK 6 - Write a function to input temperature in Centigrade and convert to Fahrenheit.

// function celsToFahr(cels) {
//     return cels + " Celsius is " + ((cels * 9 / 5) + 32) + " Fahrenheit";
// }

// console.log(celsToFahr(24));


// // TASK 7 - Write a function to find the maximum element in array of numbers. Filter out all non-number elements.

// var someElements = [1, "bla", 4, 10, NaN, true, 9, undefined];

// function findMaxNum(arr) {
//     var max = -1;
//     for (var i = 0; i < arr.length; i++) {
//         if (typeof arr[i] === "number" && arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     return max;
// }

// console.log(findMaxNum(someElements));
