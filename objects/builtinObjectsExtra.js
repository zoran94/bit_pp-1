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


// // TASK 4 - Write a function that finds the smallest element of a given array.The function should return an object that contains the smallest value and its last position in the array.
// //     Input: [1, 4, -2, 11, 8, 1, -2, 3]
// // Output: { minValue: -2, minLastIndex: 6 }

// function smallestElement(arr) {
//     var minValue = Math.min(...arr);
//     var minLastIndex = arr.lastIndexOf(minValue);

//     return { minValue: minValue, minLastIndex: minLastIndex };
// }

// console.log(smallestElement([1, 4, -2, 11, 8, 1, -2, 3]));


// // TASK 5a - Write a function that finds all the elements in a given array less than a given element.
// //     Input: [2, 3, 8, -2, 11, 4], 6
// // Output: [2, 3, -2, 4]

// function findLessThan(arr, num) {
//     var output = [];
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] < num) {
//             output.push(arr[i]);
//         }
//     }
//     return output;
// }

// console.log(findLessThan([2, 3, 8, -2, 11, 4], 6));


// // TASK 5b - Write a function that finds all the elements in a given array that start with the “pro” substring.The function should be case insensitive.
// //     Input: [’JavaScript’, ’Programming’, ’fun’, ’product’]
// // Output: [’Programming’, ‘product’]

// function startsWithPro(arr) {
//     var output = [];
//     var substr = 'pro';
//     for (var i = 0; i < arr.length; i++) {
//         var smallCaps = arr[i].toLowerCase();
//         if (smallCaps.slice(0, 3) === substr) {
//             output.push(arr[i]);
//         }
//     }
//     return output;
// }

// console.log(startsWithPro(['JavaScript', 'Programming', 'fun', 'product']));


// // TASK 5c - Write a function that expects an array and a callback function that filters out some of the elements. Use functions defined in a) or b) to test it. 

// function bla(arr, func1) {
//     return func1(arr);
// }

// console.log(bla(['JavaScript', 'Programming', 'fun', 'product'], startsWithPro));


// // TASK 6 - Write a list(array) of products you usually buy in the supermarket.Write a price and name for each product.For example,
// //     [
// //         { name: ‘apples’, price: 100},
// //         { name: ‘milk’, price: 80},
// //         { name: ’bananas’, price: 150}
// //     ]
// // Write a function that calculates the total price of your shopping list.
// // Write a function that calculates the average product price of your shopping list.Print this value with the precision of three decimals.
// // Write a function that prints out the name of the most expensive product on your shopping list.Write the name in uppercase. 

// var products = [
//     { name: 'apples', price: 100 },
//     { name: 'milk', price: 80 },
//     { name: 'bananas', price: 150 }
// ];

// function totalPrice(arr) {
//     var sum = 0;
//     for (var i = 0; i < arr.length; i++) {
//         sum += arr[i].price;
//     }
//     return sum;
// }

// function avgPrice(arr) {
//     var sum = totalPrice(arr);
//     var avg = sum / arr.length;
//     return avg;
// }

// function mostExpensiveProduct(arr) {
//     var mostExpensiveValue = 0;
//     var output = "";
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i].price > mostExpensiveValue) {
//             mostExpensiveValue = arr[i].price;
//             output = arr[i].name.toUpperCase();
//         }
//     }
//     return output;
// }

// console.log(totalPrice(products));
// console.log(avgPrice(products));
// console.log(mostExpensiveProduct(products));


// // TASK 7a - Write a
// // function that checks
// // if a given string is written in all capitals.

// function isUpper(str) {
//     var copyStr = str.slice().toUpperCase();

//     for (var i = 0; i < str.length; i++) {
//         var element = str[i];
//         if (element === copyStr[i]) {
//             continue;
//         } else {
//             return false;
//         }
//     }

//     return true;
// }

// console.log(isUpper('NENAD'));


// TASK 7 b - Write a
// function that checks
// if a given string contains any digits.

// function anyDigit(str) {
//     for (var i = 0; i < str.length; i++) {
//         var element = str[i];
//         if (parseInt(element)) {
//             return true;
//         }
//     }
//     return false;
// }

// console.log(anyDigit('Hello it\'s me'));


// TASK 7 c - Write a
// function that checks
// if a given string is a valid hexadecimal color.

// function isValidHexColor(str) {
//     var strCopy = str.toLowerCase();
//     var hex = 'abcdef';
//     var nums = '0123456789';

//     if (strCopy[0] !== '#') {
//         return false;
//     }

//     for (var i = 1; i < strCopy.length; i++) {
//         var element = strCopy[i];
//         if (hex.indexOf(element) > 0 || nums.indexOf(element) > 0) {
//             continue;
//         } else {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(isValidHexColor('#FF22J0'));


// // TASK 7 d - Write a
// // function that checks
// // if a given number belongs to the interval from 1900 to 2018.

// function belongInterval(num) {
//     if (num < 2019 && num > 1899) {
//         return true;
//     }
//     return false;
// }

// console.log(belongInterval(1994));


// // TASK 7 e - Write function named validator that returns an object with properties stringValidator, passwordValidator, colorValidator, and yearValidator referencing the functions from a) to d).

// function validator() {
//     return {
//         stringValidator: isUpper,
//         passwordValidator: anyDigit,
//         colorValidator: isValidHexColor,
//         yearValidator: belongInterval,
//     }
// }

// console.log(validator());


// TASK 8 - Write a
// function that calculates a number of days to your birthday.
// Input: 25 February
// Output: 5 days

// TASK 9 - Write a function that
// for a given departure and arrival time calculates the time the trip takes.
// Input: 8: 22: 13 11: 43: 22
// Output: 3 hours 21 minutes 9 seconds

// // TASK 10 - Write a constructor
// // function that creates points in space.Each point in space has its own x, y, and z coordinate.For example, (3, 5, 1) can be a point in space.


// // Write a
// // function that calculates the distance between two points in the space.
// // Assuming all positives x and y

// function Point(x, y) {
//     this.x = x;
//     this.y = y;
// }

// function calculateDistance(p1, p2) {
//     var a = p2.y - p1.y;
//     var b = p2.x - p1.x;
//     return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
// }

// var point1 = new Point(0, 0);
// var point2 = new Point(2, 2);

// console.log(calculateDistance(point1, point2));


// // TASK 11 - Write a
// // function that generates a random integer value between 5 and 20.
// // Write a
// // function that generates a random integer value between 50 and 100.
// // Write a
// // function which expects a number and a callback generator
// // function and returns an array of numbers produced by the generator
// // function.

// function random5to20() {
//     return Math.floor(Math.random() * 16 + 5);
// }

// function random50to100() {
//     return Math.floor(Math.random() * 51 + 50);
// }

// function generateNumbers(num, func) {
//     var output = [];
//     for (var i = 0; i < num; i++) {
//         output.push(func());
//     }
//     return output;
// }

// console.log(generateNumbers(10, random50to100));


// // TASK 12 - Write a
// // function that shuffles the elements of a given array.
// // Input: [3, 6, 11, 2, 9, 1]
// // Output: [6, 2, 9, 1, 3, 11](it can be any random permutation of the given array)

// function shuffle(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         var randomIndex = Math.floor(Math.random() * arr.length);
//         var temp = arr[randomIndex];
//         arr[randomIndex] = arr[i];
//         arr[i] = temp;
//     }
//     return arr;
// }

// console.log(shuffle([3, 6, 11, 2, 9, 1]));