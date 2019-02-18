// // TASK 1 - Write a program that calculates the maximum of two given numbers.

// function max(a, b) {
//     return a > b ? a : b;
// }

// var res = max(2, 4);
// console.log(res);


// // TASK 2 - Write a program that checks if a given number is odd.

// function isOdd(num) {
//     var res = (num % 2 === 0) ? "Number is even!" : "Number is odd!";
//     return res;
// }

// var result = isOdd(77);
// console.log(result);



// // TASK 3 - Write a program that checks if a given number is a three digit long number

// function threeDigNum(num) {
//     var res = (num < 1000 && num > 99) ? "It's a three digit number!" : "It's not a three digit number!";
//     return res;
// }

// var result = threeDigNum(101);
// console.log(result);


// // TASK 4 - Write a program that calculates an arithmetic mean of four numbers

// function avg(num1, num2, num3, num4) {
//     var sum = num1 + num2 + num3 + num4;
//     var res = sum / arguments.length;
//     return res;
// }

// var result = avg(5, 7, 9, 3);
// console.log(result);


// // TASK 5 - Write a program that draws a square of a given size.

// function drawSquare(num) {
//     var res = "";
//     for (var i = 0; i < num; i++) {
//         for (var j = 0; j < num; j++) {
//             if (i === 0 || i === num - 1) {
//                 res += "*";
//             } else if (j === 0 || j === num-1){
//                 res += "*";
//             } else {
//                 res += " ";
//             }
//         }
//         res += "\n";
//     }
//     return res;
// }

// console.log(drawSquare(5));


// // TASK 6 - Write a program that draws a horizontal chart representing three given values


// function horizontalChart(num1, num2, num3) {
//     var res = "";
//     for (var i = 0; i < arguments.length; i++) {
//         for (var j = 0; j < arguments[i]; j++) {
//             res += "*"
//         }
//         res += "\n";
//     }
//     return res;
// }

// console.log(horizontalChart(5, 3, 7));



// // TASK 7 - Write a program that calculates a number of digits of a given number.

// function numOfDigits(num) {
//     var numToStr = "" + num;
//     var count = 0;
//     for (var i = 0; i < numToStr.length; i++) {
//         count++;
//     }
//     return count;
// }

// var result = numOfDigits(26559);
// console.log(result);


// // TASK 8 - Write a program that calculates a number of appearances of a given number in a given array

// var a = [2, 4, 7, 8, 7, 7, 1];
// var e = 7;

// function numOfApp(a) {
//     var count = 0;
//     for (var i = 0; i < a.length; i++)
//         if (a[i] === e) {
//             count++;
//         }
//     return count;
// }

// console.log(numOfApp(a));


// // TASK 9 - Write a program that calculates the sum of odd elements of a given array.

// function sumOddEl(arr) {
//     var sumOdd = 0;
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 1) {
//             sumOdd += arr[i];
//         }
//     }
//     return sumOdd;
// }

// console.log(sumOddEl([2, 8, 7, 4, 3]));


// // TASK 10 - Write a program that calculates the number of appearances of a letter a in a given string. Modify the program so it calculates the number of both letters a and A

// function numOfApp(str) {
//     var count = 0;
//     for (var i = 0; i < str.length; i++) {
//         if (str[i] === "A" || str[i] === "a") {
//             count++;
//         }
//     }
//     return count;
// }

// console.log(numOfApp("BlaaaA"));


// // TASK 11 - Write a program that concatenates a given string given number of times. For example, if “abc” and 4 are given values, the program prints out abcabcabcabc. 

// function concatStr(str, num) {
//     var res = "";
//     for (var i = 0; i < num; i++) {
//         res += str;
//     }
//     return res;
// }

// console.log(concatStr("abc", 4));