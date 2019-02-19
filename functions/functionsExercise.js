// // TASK 1 - Write a function to check whether the `input` is a string or not.

// function isString(str) {
//     return typeof str === "string" ? true : false;
// }

// console.log(isString("My random string"));
// console.log(isString(12));



// // TASK 2 - Write a function to check whether a string is blank or not.

// function isBlankString(str) {
//     if (str === " ") {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(isBlankString(false));



// // TASK 3 - Write a function that concatenates a given string n times (default is 1).

// function concatString(str, num) {
//     num = num || 1;
//     var res = "";

//     for (var i = 0; i < num; i++) {
//         res += str;
//     }

//     return res;
// }

// var result = concatString("Ha", 3);
// console.log(result);



// // TASK 4 - Write a function to count the number of letter occurrences in a string.

// function letterOccur(str, letter) {
//     var count = 0;

//     for (var i = 0; i < str.length; i++) {
//         if (letter === str[i]) {
//             count++;
//         }
//     }

//     return count;
// }

// var result = letterOccur("My random string", "n");
// console.log(result);



// // TASK 5 - Write a function to find the position of the first occurrence of a character in a string. The result should be in human numeration form. If there are no occurrences of the character, the function should return -1.

// function findFirstCharPosInStr(str, char, num) {
//     num = num || -1;

//     for (var i = 0; i < str.length; i++) {

//         if (str[i] === char) {
//             return "Index: " + i;
//         }
//     }

//     return num;
// }

// console.log(findFirstCharPosInStr("Blaasdasdasdas", "l"));



// // TASK 6 - Write a function to find the position of the last occurrence of a character in a string. The result should be in human numeration form. If there are no occurrences of the character, function should return -1.

// function findLastCharPosInStr(str, char, num) {
//     num = num || -1;

//     for (var i = str.length - 1; i >= 0; i--) {

//         if (str[i] === char) {
//             return "Index: " + i;
//         }
//     }

//     return num;
// }

// console.log(findLastCharPosInStr("Blaasdasdasldals", "l"));



// // TASK 7 - Write a function to convert string into an array. Space in a string should be represented as “null” in new array.

// function stringToArray(str) {
//     var arr = [];

//     for (var i = 0; i < str.length; i++) {

//         if (str[i] === " ") {
//             arr[i] = null;
//             continue;
//         }

//         arr[i] = str[i];
//     }

//     return arr;
// }

// console.log(stringToArray("My random string"));



// TASK 8 - Write a function that accepts a number as a parameter and checks if the number is prime or not. 
// Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself. NOT DONE!



// // TASK 9 - Write a function that replaces spaces in a string with provided separator. If separator is not provided, use “-” (dash) as the default separator.

// function replaceSpacesWithChar(str, separator) {
//     separator = separator || "-";
//     var res = "";

//     for (var i = 0; i < str.length; i++) {
//         if (str[i] === " ") {
//             res += separator;
//             continue;
//         }

//         res += str[i];
//     }

//     return res;
// }

// var result = replaceSpacesWithChar("My random string", "_");
// console.log(result);



// // TASK 10 - Write a function to get the first n characters and add “...” at the end of newly created string.

// function getFirstNChar(str, num) {
//     var res = "";
//     num = num || str.length - 1;

//     for (var i = 0; i < num; i++) {

//         var elem = str[i];
//         res += elem;
//     }

//     res += "..."

//     return res;
// }

// var result = getFirstNChar("BLablallba", 7);
// console.log(result);



// // TASK 11 - Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values.

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



// // TASK 12 - Write a function to calculate how many years there are left until retirement based on the year of birth. Retirement for men is at age of 65 and for women at age of 60. If someone is already retired, a proper message should be displayed.

// function yearsRetirementLeft(yearOfB, sex, currYear) {

//     currYear = currYear || 2019;
//     var maleRetire = 65;
//     var femaleRetire = 60;
//     var age = currYear - yearOfB;
//     var yearsLeft = 0;

//     if (sex === "male") {

//         yearsLeft = maleRetire - age;
//         return yearsLeft;


//     } else if (sex === "female") {

//         yearsLeft = femaleRetire - age;
//         return yearsLeft;
//     }
// }

// var result = yearsRetirementLeft(1994, "male", 2019);
// console.log(result);



// TASK 13 - Write a function to humanize a number (formats a number to a human-readable string) with the correct suffix such as 1st, 2nd, 3rd or 4th.

function humanizeNumber(num) {

}