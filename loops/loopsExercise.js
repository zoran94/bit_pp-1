// // TASK 1

// for (var i = 0; i < 15; i++) {
//     if (i % 2 === 0) {
//         console.log("The number " + i + " is even");
//     } else {
//         console.log("The number " + i + " is odd");
//     }
// }

// // TASK 2
// var res = 0;

// for (var i = 0; i < 1000; i+=3) {
//     if (i % 5 === 0 && i % 3 === 0) {
//         res += i;
//     }
// }

// console.log(res);

// // TASK 3

// var a = [5, 9, 2, 8, 7];
// var sum = 0;
// var product = 1;

// for (var i = 0; i < a.length; i++) {
//     sum += a[i];
//     product *= a[i];
// }

// console.log(sum);
// console.log(product);

// // TASK 4

// var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];
// var res = "";

// for (var i = 0; i < x.length; i++) {
//     res += x[i] + " ";
// }

// console.log(res);

// // TASK 5

// var a = [
//     [1, 2, 1, 24],
//     [8, 11, 9, 4],
//     [7, 0, 7, 27]
// ];

// for (var i = 0; i < a.length; i++) {
//     for (var e = 0; e < a[i].length; e++) {
//         console.log(a[i][e]);
//     }
// }

// // TASK 6

// var sumOfSquares = 0;

// for (var i = 1; i < 21; i++) {
//     sumOfSquares += i * i;
// }

// console.log(sumOfSquares);

// // TASK 7

// var marks = [80, 77, 88, 95, 68];
// var sum = 0;
// var avgMarks;
// var grade;

// for (var i = 0; i < marks.length; i++) {
//     sum += marks[i];
// }

// avgMarks = sum / marks.length;
// console.log(avgMarks);

// if (avgMarks < 60) {
//     grade = "F";
// } else if (avgMarks < 70) {
//     grade = "D";
// } else if (avgMarks < 80) {
//     grade = "C";
// } else if (avgMarks < 90) {
//     grade = "B";
// } else if (avgMarks <= 100) {
//     grade = "A";
// } else {
//     grade = "Its not possible that you have more than 100 points";
// }

// console.log(grade);

// TASK 8

//// One way of understanding this problem

// for (var i = 1; i < 100; i++) {
//     if (i % 3 === 0) {
//         console.log("Fizz");
//     } else if (i % 5 === 0 && !(i % 3 === 0)) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
    
//     if (i % 5 === 0 && i % 3 === 0) {
//         console.log("FizzBuzz");
//     }
// }

//// The other way

// for (var i = 1; i <= 100; i++){
//     if (i % 3 === 0 && i % 5 === 0) {
//      console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//         console.log("Fizz");
//     } else if (i % 5 === 0) {
//         console.log("Buzz");
//     } else console.log(i);
// }


