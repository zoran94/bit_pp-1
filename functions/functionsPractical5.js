'use strict'

// // TASK 1 - Find the min and max element in the following array and switch their places. Print out the modified array in the console.
// // Input:  [ 3, 500, 12, 149, 53, 414, 1, 19 ]
// // Output: [ 3, 1, 12, 149, 53, 414, 500, 19 ]

// function indOfMin(arr) {
//     var min = arr[0];
//     var indMin = arr[0];
//     for (var i = 1; i < arr.length; i++) {
//         var elem = arr[i];
//         if (elem < min) {
//             min = elem;
//             indMin = i;
//         }
//     }
//     return indMin;
// }

// function indOfMax(arr) {
//     var max = arr[0];
//     var indMax = arr[0];
//     for (var i = 1; i < arr.length; i++) {
//         var elem = arr[i];
//         if (elem > max) {
//             max = elem;
//             indMax = i;
//         }
//     }
//     return indMax;
// }


// function switchPlacesMinAndMax(arr) {
//     var outputArr = [];
//     var indMin = indOfMin(arr);
//     var indMax = indOfMax(arr);

//     for (var i = 0; i < arr.length; i++) {
//         if (i === indMin) {
//             outputArr[i] = arr[indMax];
//             continue;
//         } else if (i === indMax) {
//             outputArr[i] = arr[indMin];
//             continue;
//         }
//         outputArr[i] = arr[i];
//     }

//     return outputArr;
// }

// var a = [3, 500, 12, 149, 53, 414, 1, 19];
// console.log(switchPlacesMinAndMax(a));



// // TASK 2 - Use the following array to make a new one by dividing its values by two and adding 5. If a given element's value is 0, change it to 20.
// // Input:  [ 3, 500, -10, 149, 53, 414, 1, 19 ]
// // Output: [ 6.5, 255, 20, 79.5, 31.5, 212, 5.5, 14.5 ]

// function divideHalfAdd5(arr) {
//     var outputArr = [];
//     for (var i = 0; i < arr.length; i++) {
//         var calc = (arr[i] / 2) + 5;
//         if (calc === 0) {
//             outputArr[i] = 20;
//             continue;
//         }
//         outputArr[i] = (arr[i] / 2) + 5;
//     }
//     return outputArr;
// }

// var a = [3, 500, -10, 149, 53, 414, 1, 19];
// console.log(divideHalfAdd5(a));


// // TASK 3 - Initialize two arrays. The first one should contain student names, the second one the number of points for each student. Display students' names with their corresponding grade. Use the following ranges:
// // 51-60 -> 6,
// // 61-70 -> 7,
// // 71-80 -> 8,
// // 81-90 -> 9,
// // 91-100 -> 10.
// // Input: 
// // [ "Michael", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ], [ 50, 39, 63, 72, 99, 51, 83, 59 ]
// // Output: 
// // Bill acquired 59 points and earned 6. Michael acquired 50 points and failed to complete the exam.

// var names = ["Michael", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill"];
// var gradeRange = [50, 39, 63, 72, 99, 51, 83, 59];

// function pass(grade) {
//     if (grade < 51) {
//         return "failed to complete the exam. ";
//     } else if (grade < 61) {
//         return "earned 6. ";
//     } else if (grade < 71) {
//         return "earned 7. "
//     } else if (grade < 81) {
//         return "earned 8. "
//     } else if (grade < 91) {
//         return "earned 9. "
//     } else {
//         return "earned 10. "
//     }
// }

// function nameGrade(names, gradeRange) {
//     var outputStr = "";
//     for (var i = 0; i < names.length; i++) {
//         outputStr += names[i] + " acquired " + gradeRange[i] + " points and " + pass(gradeRange[i]);
//     }
//     return outputStr;
// }

// console.log(nameGrade(names, gradeRange));


// // TASK 6 - Write a program that uses a loop to add all the even numbers from 1 to 1000 and subtracts all the odd numbers 1 to 500 from the calculated sum.The result should then be multiplied by 12.5 and displayed in console.
// // Output: 2350000

// function evenTo1000() {
//     var res = 0;
//     for (var i = 1; i < 1001; i++) {
//         if (i % 2 === 0) {
//             res += i;
//         }
//     }
//     return res;
// }

// function oddTo500() {
//     var res = 0;
//     for (var i = 1; i < 501; i += 2) {
//         res += i;
//     }
//     return res;
// }

// console.log((evenTo1000() - oddTo500()) * 12.5);


// // TASK 7 - Define a 10 element array.Take the first two letters from every string(that has at least 2 letters) in the array and create a new string from them.Print it out in the console.
// // Input: ["M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A"]
// // Output: AnStJoJoDaMa


// function firstTwoLetters(arr) {
//     var outputStr = "";
//     for (var i = 0; i < inputArr.length; i++) {
//         if (typeof inputArr[i] === "string" && inputArr[i].length > 1) {
//             for (var j = 0; j < 2; j++) {
//                 outputStr += inputArr[i][j];
//             }
//         }
//     }
//     return outputStr;
// }

// var inputArr = ["M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A"];
// var result = firstTwoLetters(inputArr);
// console.log(result);


// // TASK 8 - Write a program that takes a string and prints its characters out in reversed order in the console.
// // Input:  Belgrade Institute of Technology
// // Output: ygolonhceT fo etutitsnI edargleB

// function reverseString(str) {
//     var outputStr = "";
//     for (var i = str.length - 1; i >= 0; i--) {
//         outputStr += str[i];
//     }
//     return outputStr;
// }

// var inputArr = "Belgrade Institute of Technology";
// var result = reverseString(inputArr);
// console.log(result);


// // TASK 9 - Write a program that displays all the combinations of two numbers between 1 and 7. Don 't display two of the same numbers at the same time. Display the number of possible combinations, as well. (E.g. (1.2),(2,1) is allowed, but not (1,1), (2,2)...).

// function combinations(num1, num2) {
//     var outputStr = "";
//     for (var i = num1; i <= num2; i++) {
//         for (var j = num2; j >= num1; j--) {
//             if (i !== j) {
//                 outputStr += "(" + i + "," + j + ")";
//             }
//         }
//     }
//     return outputStr;
// }

// console.log(combinations(1, 7));


// // TASK 10 - Write a program that checks if the entered number is a prime number (i.e. divisible only by 1 and by itself).
// // Input:  17    | 15
// // Output: true  | false

// function isPrime(num) {
//     if (num === 1) {
//         return false;
//     } else if (num === 2) {
//         return true;
//     } else {
//         for (var i = 2; i < num; i++) {
//             if (num % i === 0) {
//                 return false;
//             }
//         }
//     }
//     return true;
// }

// console.log(isPrime(86));


// // TASK 11 - Check if a given string is a palindrome (spaces are ignored).
// // Input:  eye  | Geek  | a nut for a jar of tuna
// // Output: true | false | true

// function isPalindrome(str) {
//     for (var i = 0, j = str.length - 1; i < j; i++, j--) {
//         if (str[i] === " ") {
//             j++;
//         } else if (str[j] === " ") {
//             i--;
//         } else if (str[i] !== str[j]) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(isPalindrome("a nut for a jar of tuna"));


// TASK 12 - Write a program that calculates the greatest common divisor of two integers.Note: The greatest common divisor of two non - zero integers is the greatest positive number that divides both numbers with no remainder.
// Input: 192 42 | 81 9
// Output: 6 | 9