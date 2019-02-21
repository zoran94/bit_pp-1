// // TASK 1 - Write a program to insert a string within a string at a particular position (default is 1, beginning of a string).

// // "My random string", "JS " -> "JS My random string"
// // "My random string", "JS ", 10 -> "My random JS string"

// function insertString(str, insStr, index) {
//     index = index || 0;
//     var res = "";

//     for (var i = 0; i < str.length; i++) {
//         var elem = str[i];
//         if (i === index) {
//             for (var j = 0; j < insStr.length; j++) {
//                 res += insStr[j];
//                 continue;
//             }
//         }
//         res += elem;
//     }
//     return res;
// }

// var result = insertString("My random string", "JS ");
// console.log(result);



// // TASK 2 - Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.

// // [NaN, 0, 15, false, -22, '', undefined, 47, null]

// function joinElemInStr(arr) {
//     var str = "";

//     for (var i = 0; i < arr.length; i++) {
//         var elem = arr[i];
//         if (elem !== Infinity && elem !== undefined && elem !== null && !isNaN(elem)) {
//             str += elem + " ";
//         }
//     }
//     return str;
// }

// var inputArr = [NaN, 0, 15, false, -22, '', undefined, 47, null]
// var result = joinElemInStr(inputArr);
// console.log(result);



// // TASK 3 - Write a program to filter out falsy values from the array.

// // [NaN, 0, 15, false, -22, '', undefined, 47, null] -> [15, -22, 47]

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



// // TASK 4 - Write a function that reverses a number. The result must be a number.

// // 12345 -> 54321 // Output must be a number

// function reverseNum(num) {
//     var numToStr = "" + num;
//     var outputStr = "";
//     for (var i = numToStr.length - 1; i >= 0; i--) {
//         var elem = numToStr[i];
//         outputStr += elem;
//     }
//     return parseInt(outputStr);
// }

// console.log(reverseNum(12345));



// // TASK 5 - Write a function to get the last element of an array.Passing a parameter 'n' will return the last 'n' elements of the array.

// // [7, 9, 0, -2] -> -2
// // [7, 9, 0, -2], 2 -> [0, -2]

// function getLastElemOfArr(arr, n) {
//     n = n || -1;
//     var outputArr = [];

//     for (var i = arr.length + n; i < arr.length; i++) {
//         var elem = arr[i];
//         outputArr[outputArr.length] = elem;
//     }

//     return outputArr;
// }

// var test = [7, 9, 0, -2];
// var result = getLastElemOfArr(test, -3);
// console.log(result);



// // TASK 6 - Write a function to create a specified number of elements with pre-filled numeric value array.

// // 6, 0 -> [0, 0, 0, 0, 0, 0]
// // 2, "none" -> ["none", "none"]
// // 2 -> [null, null] 

// function createElements(num, char) {
//     var outputArr = [];
//     char = char || null;

//     for (var i = 0; i < num; i++) {
//         outputArr[i] = char;
//     }

//     return outputArr;
// }

// var result = createElements(2);
// console.log(result);



// TASK 7 - Write a function that says whether a number is perfect.

// 28 -> 28 is a perfect number.

//Note: According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself(also known as its aliquot sum).Equivalently, a perfect number is a number that is half the sum of all of its positive divisors(including itself).

//E.g.: The first perfect number is 6, because 1, 2 and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: (1 + 2 + 3 + 6) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.



// // TASK 8 - Write a function to find a word within a string.

// // 'The quick brown fox', 'fox' -> "'fox' was found 1 times"
// // 'aa, bb, cc, dd, aa', 'aa' -> "'aa' was found 2 times"


// function timesWordInString(str, word) {
//     var count = 0;
//     var res = '';

//     for (var i = 0, j = 0; i <= str.length; i++) {
//         if (res === word) {
//             count++;
//             j = 0;
//             res = '';
//         }

//         if (str[i] === word[j]) {
//             res += str[i];
//             j++;
//         }
//         continue;
//     }

//     return word + " was found " + count + " times";
// }

// var res = timesWordInString('The red foxfox is quicker than brown fox', 'fox');
// console.log(res);



// TASK 9 - Write a function to hide email address.

// "myemailaddress@bgit.rs" -> "myemail...@bgit.rs"



// TASK 10 - Write a program to find the most frequent item of an array.

// [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]
