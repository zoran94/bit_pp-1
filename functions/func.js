// // TASK 1

// function max(a, b) {
//     return a > b ? a : b;
// }

// var res = max(2, 4);
// console.log(res);


// // TASK 2

// function isOdd(num) {
//     var res = (num % 2 === 0) ? "Number is even!" : "Number is odd!";
//     return res;
// }

// var result = isOdd(77);
// console.log(result);



// // TASK 3

// function threeDigNum(num) {
//     var res = (num < 1000 && num > 99) ? "It's a three digit number!" : "It's not a three digit number!";
//     return res;
// }

// var result = threeDigNum(101);
// console.log(result);


// // TASK 4

// function avg(num1, num2, num3, num4) {
//     var sum = num1 + num2 + num3 + num4;
//     var res = sum / arguments.length;
//     return res;
// }

// var result = avg(5, 7, 9, 3);
// console.log(result);


// TASK 5

function drawSquare(size) {

}


// // TASK 7

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


// // TASK 8

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


// // TASK 9

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


// // TASK 10

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


// // TASK 11

// function concatStr(str, num) {
//     var res = "";
//     for (var i = 0; i < num; i++) {
//         res += str;
//     }
//     return res;
// }

// console.log(concatStr("abc", 4));