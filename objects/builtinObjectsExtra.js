// // TASK 1 - Write a functional expression that duplicates each element of a given array.
// // Input: [2, 4, 7, 11, -2, 1]
// // Output: [2, 2, 4, 4, 7, 7, 11, 11,  -2, -2, 1, 1]

// function duplicateEl(arr) {
//     var output = new Array();
//     for (var i = 0; i < arr.length; i++) {
//         output.push(arr[i]);
//         output.push(arr[i]);
//     }
//     return output;
// }

// console.log(duplicateEl([2, 4, 7, 11, -2, 1]));


// // TASK 2 - Write a functional expression that removes all duplicates in a given array.
// // Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
// // Output: [1, 4, 8, 9, 12, 13] 

// function removeDuplicates(arr) {
//     var output = new Array();
//     for (var i = 0; i < arr.length; i++) {
//         if (output.indexOf(arr[i]) === -1) {
//             output.push(arr[i]);
//         }
//         // output.push();
//     }
//     return output.sort(function (a, b) { return a - b });
// }

// console.log(removeDuplicates([8, 13, 8, 9, 12, 8, 1, 1, 4, 13]));


// // TASK 3a - Write a function that checks if a given array has odd number of elements.
// //     Input: [1, 2, 9, 2, 1]
// // Output: true

// function hasOddEl(arr) {
//     if (arr.length % 2 === 1) {
//         return true;
//     }
//     return false;
// }

// console.log(hasOddEl([1, 2, 9, 2, 1]));


// // TASK 3b - Write a function that counts the number of elements less than the middle element.If the given array has an even number of elements, print out an error message.
// //     Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
// // Output: 4

// function countElementsLessThanMiddle(arr) {
//     var middleElement;
//     var count = 0;
//     if (arr.length % 2 === 1) {
//         middleElement = arr[arr.length / 2 - 0.5];
//         for (var i = 0; i < arr.length; i++) {
//             if (arr[i] < middleElement) {
//                 count++;
//             }
//         }
//     } else {
//         return "Error! Array has even elements";
//     }
//     return count;
// }

// console.log(countElementsLessThanMiddle([-1, 8.1, 3, 6, 2.3, 44, 2.11]));


// TASK 4 - Write a function that finds the smallest element of a given array.The function should return an object that contains the smallest value and its last position in the array.
//     Input: [1, 4, -2, 11, 8, 1, -2, 3]
// Output: { minValue: -2, minLastIndex: 6 }
