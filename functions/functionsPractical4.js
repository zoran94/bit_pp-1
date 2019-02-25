'use strict'
// // TASK 1 - Write a program that checks if a given element e is in the array a.
// //     Input: e = 3, a = [5, -4.2, 3, 7]
// // Output: yes

// // Input: e = 3, a = [5, -4.2, 18, 7]
// // Output: no

// function checkEl(arr, e) {
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] === e) {
//             return "Yes";
//         }
//     }
//     return "No";
// }

// var a = [5, -4.2, 18, 7];
// var e = 3;
// console.log(checkEl(a, e));


// // TASK 2 - Write a program that multiplies every positive element of a given array by 2.
// // Input array: [-3, 11, 5, 3.4, -8]
// // Output array: [-3, 22, 10, 6.8, -8]

// function multiplyEl(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] > 0) {
//             arr[i] = arr[i] * 2;
//         }
//     }
//     return arr;
// }

// console.log(multiplyEl([-3, 11, 5, 3.4, -8]));


// // TASK 3 - Write a program that finds the minimum of a given array and prints out its value and index. 
// // Input array: [4, 2, 2, -1, 6]
// // Output: -1, 3

// function printMin(arr) {
//     var min = arr[0];
//     var index = 0;
//     for (var i = 1; i < arr.length; i++) {
//         if (arr[i] < min) {
//             min = arr[i];
//             index = i;
//         }
//     }
//     return min + ", " + index;
// }

// console.log(printMin([4, 2, 2, -1, 6]));


// // TASK 4 - Write a program that finds the second smallest number and prints out its value.
// // Input array: [4, 2, 2, -1, 6]
// // Output: 2

// function min(arr) {
//     var min = arr[0];
//     var secondMin = Infinity;

//     for (var i = 1; i < arr.length; i++) {
//         if (arr[i] < min) {
//             min = arr[i];
//         }
//     }

//     for (var j = 1; j < arr.length; j++) {
//         if (arr[j] > min && arr[j] < secondMin) {
//             secondMin = arr[j];
//         }
//     }

//     return secondMin;
// }

// console.log(min([-99, 2, 2, -7, 6]));


// // TASK 5 - Write a program that calculates the sum of positive elements in the array.
// // Input array: [3, 11, -5, -3, 2]
// // Output: 16

// function sumPositiveElem(arr) {
//     var sum = 0;
//     for (var i = 0; i < arr.length; i++) {
//         var elem = arr[i];
//         if (elem > 0) {
//             sum += elem;
//         }
//     }
//     return sum;
// }

// console.log(sumPositiveElem([3, 11, -5, -3, 2]));


// // TASK 6 - Write a program that checks if a given array is symmetric.An array is symmetric if it can be read the same way both from the left and the right hand side.
// // Input array: [2, 4, -2, 7, -2, 4, 2]
// // Output: The array is symmetric.

// // Input array: [3, 4, 12, 8]
// // Output: The array isn’t symmetric.

// function isSymmetric(arr) {
//     for (var i = 0, j = arr.length - 1; i < j; i++ , j--) {
//         if (arr[i] === arr[j]) {
//             continue;
//         } else {
//             return "The array isn't symmetric."
//         }
//     }
//     return "The array is symmetric."
// }

// console.log(isSymmetric([3, 4, 12, 8]));


// TASK 7 - Write a program that intertwines two arrays. You can assume the arrays are of the same length. 
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 3, 5, 8, 6, 11, 2, 9]