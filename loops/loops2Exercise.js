// // TASK 1

// var e = 3;
// var a = [5, -4.2, 3, 7];
// var res = "No!";

// for (var i = 0; i < a.length; i++) {
//     if (a[i] === e) {
//         res = "Yes!";
//     }
// }

// console.log(res);


// // TASK 2

// var arr = [-3, 11, 5, 3.4, -8];
// var arr1 = [];

// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//         arr1[i] = arr[i] * 2;
//     } else {
//         arr1[i] = arr[i];
//     }
// }

// console.log(arr1);


// // TASK 3

// var arr = [4, 2, 2, -1, 6];
// var min = arr[0];
// var minInd = 0;

// for (var i = 1; i < arr.length; i++) {
//     if (arr[i] < min) {
//         min = arr[i];
//         minInd = i;
//     }
// }

// console.log(min + ", " + minInd);

// // TASK 4 NE ZNAM!

// var arr = [4, 2, 2, -1, 6];
// var min = arr[0];
// var diff = 0;

// for (var i = 1; i < arr.length; i++) {
//     if (arr[i] < min) {
//         min = arr[i];
//     }
// }




// // TASK 5

// var arr = [3, 11, -5, -3, 2];
// var sum = 0;

// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//         sum += arr[i];
//     }
// }

// console.log(sum);

// ------------------------------------------------------------------------
// // TASK 6

// var arr = [2, 4, -2, 7, -2, 4, 2];
// var symmetric = true;

// for (var i = 0, b = 1; i < arr.length; i++ , b++) {
//     if (arr[i] === arr[arr.length - b]) {

//     }
// }
// ------------------------------------------------------------------------------

// // TASK 7

// var arr1 = [4, 5, 6, 2];
// var arr2 = [3, 8, 11, 9];
// var arrRes = [];

// for (var i = 0, j = 1, k = 0; i < arr1.length; i++ , j += 2, k += 2) {
//     arrRes[k] = arr1[i];
//     arrRes[j] = arr2[i];
// }

// console.log(arrRes);

// // TASK 8   NE ZNAM!
// // ------------------------------------------------------

// var arr1 = [4, 5, 6, 2];
// var arr2 = [3, 8, 11, 9];
// var arrRes = [];

// arrRes = arr1 + arr2;
// console.log(arrRes);
// // --------------------------------------------------------------

// // TASK 9 

// var e = 2;
// var a = [4, 6, 2, 8, 2, 2];
// var resArr = a;
// var finalRes = [];

// for (var i = 0; i < a.length; i++) {
//     if (a[i] === e) {
//         delete resArr[i];
//     }
// }

// for (var i = 0; i < a.length; i++) {
//     if (typeof resArr[i] === "number") {
//         finalRes[i] = resArr[i];
//     }
// }

// console.log(finalRes);


// // TASK 10

// -------------------------

// var e = 78;
// var p = 3;
// var a = [2, -2, 33, 12, 5, 8];

// a[p] = e;

// console.log(a);
// -----------------------------