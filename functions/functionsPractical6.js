// // TASK 1 - Write a
// // function to count vowels in a provided string
// // Vowels are a, e, i, o, and u as well as A, E, I, O, and U.

// function countVowels(str) {
//     var count = 0;
//     for (var i = 0; i < str.length; i++) {
//         if (str[i] === "a" || str[i] === "A") {
//             count++;
//             continue;
//         } else if (str[i] === "e" || str[i] === "E") {
//             count++;
//             continue;
//         } else if (str[i] === "i" || str[i] === "I") {
//             count++;
//             continue;
//         } else if (str[i] === "o" || str[i] === "O") {
//             count++;
//             continue;
//         } else if (str[i] === "u" || str[i] === "U") {
//             count++;
//             continue;
//         }
//     }
//     return count;
// }

// console.log(countVowels("BlAa"));


// // TASK 2 - Write a
// // function that combines two arrays by alternatingly taking elements.

// // [‘a’, ’b’, ’c’], [1, 2, 3] - > [‘a’, 1, ’b’, 2, ’c’, 3]

// function combineTwoArr(arr1, arr2) {
//     var outputArr = [];
//     for (var i = 0, j = 0, k = 0; i < arr1.length; i++, j++, k++) {
//         outputArr[k] = arr1[i];
//         k++;
//         outputArr[k] = arr2[j];
//     }
//     return outputArr;
// }

// var result = combineTwoArr(['a', 'b', "c"], [1, 2, 3]);
// console.log(result);


// // TASK 3 - Write a
// // function that rotates a list by k elements.

// // For example[1, 2, 3, 4, 5, 6] rotated by two becomes[3, 4, 5, 6, 1, 2]

// function rotate(arr, k) {
//     var outputArr = [];
//     for (var i = k, j = 0; i < arr.length; i++, j++) {
//         outputArr[j] = arr[i];
//     }

//     for (var i = outputArr.length, j = 0; i < arr.length; i++, j++) {
//         outputArr[i] = arr[j];
//     }
//     return outputArr;
// }

// console.log(rotate([1, 2, 3, 4, 5, 6], 2));


// // TASK 4 - Write a function that takes a number and returns array of its digits.

// function retDigits(num) {
//     var numToStr = "" + num;
//     var arrStr = [];

//     for (var i = 0; i < numToStr.length; i++) {
//         arrStr[i] = parseInt(numToStr[i]);
//     }
//     return arrStr;
// }

// var result = retDigits(52);
// console.log(result);


// // TASK 5 - Write a program that prints a multiplication table for numbers up to 12.

function multiplicationTable(num) {
    var outputArr = "";
    for (var i = 1; i <= num; i++) {
        for (var j = 1; j <= num; j++) {
            var tempRes = "" + j * i;
            if (tempRes.length === 1) {
                outputArr += "| " + j * i + " | ";
            } else if (tempRes.length === 2) {
                outputArr += "| " + j * i + "| ";
            } else {
                outputArr += "|" + j * i + "| ";
            }
        }
        outputArr += "\n";
    }
    return outputArr;
}

console.log(multiplicationTable(12));


// // TASK 6 - Write a function to input temperature in Centigrade and convert to Fahrenheit.

// function celsToFahr(cels) {
//     return cels + " Celsius is " + ((cels * 9 / 5) + 32) + " Fahrenheit";
// }

// console.log(celsToFahr(24));


// // TASK 7 - Write a function to find the maximum element in array of numbers. Filter out all non-number elements.

// var someElements = [1, "bla", 4, 10, NaN, true, 9, undefined];

// function findMaxNum(arr) {
//     var max = -1;
//     for (var i = 0; i < arr.length; i++) {
//         if (typeof arr[i] === "number" && arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     return max;
// }

// console.log(findMaxNum(someElements));


// // TASK 8 - Write a function to find the maximum and minimum elements. Function returns an array.

// function minMax(arr) {
//     var outputArr = [];
//     var min = arr[0];
//     var max = arr[0];

//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         } else if (arr[i] < min) {
//             min = arr[i];
//         }
//     }

//     outputArr[0] = min;
//     outputArr[1] = max;
//     return outputArr;
// }

// var elements = [1, 6, -5, 10, 6];
// var result = minMax(elements)
// console.log(result);


// // TASK 9 - Write a function to find the median element of array.

// function sort(arr) {
//     var outputArr = [];
//     for (var i = 0; i < arr.length - 1; i++) {
//         for (var j = 0; j < arr.length - 1; j++) {
//             var temp;
//             if (arr[j] > arr[j + 1]) {
//                 temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }
//     outputArr = arr;
//     return outputArr;
// }

// function findMedian(arr) {
//     var res = 0;
//     if (arr.length % 2 === 1) {
//         res = arr[arr.length / 2 - 0.5];
//     } else {
//         var first = arr[arr.length / 2];
//         var second = arr[arr.length / 2 - 1];
//         res = (first + second) / 2;
//     }
//     return res;
// }

// var a = [1, 1, 1, 5, 5, 8, 10];
// var sortedA = sort(a);
// var result = findMedian(sortedA);
// console.log(result);


// // TASK 10 - Write a function to find the element that occurs most frequently.

// var example = [1, 1, 8, 9, 5, 3, 4, 5, 5, 5, 1, 1, 1, 1, 1, 1];

// function mostFrequent(arr) {
//     var elIndex = 0;
//     var count = 0;
//     var completeCount = 0;

//     for (var i = 0; i < arr.length; i++) {
//         for (var j = 0; j < arr.length; j++) {
//             if (arr[i] === arr[j]) {
//                 count++;
//             }
//         }
//         if (count > completeCount) {
//             completeCount = count;
//             elIndex = i;
//         }
//     }

//     return arr[elIndex];
// }

// console.log(mostFrequent(example));



// // TASK 11 - Write a function to find and return the first, middle and last element of an array if the array has odd number of elements.If number of elements is even, return just the first and the last.In other cases(empty array), input array should be returned.

// function firstMiddleLast(arr) {
//     var firstLast = [];
//     if (arr.length % 2 === 0) {
//         firstLast[0] = arr[0];
//         firstLast[1] = arr[arr.length - 1];
//     } else {
//         firstLast[0] = arr[0];
//         firstLast[1] = arr[arr.length / 2 - 0.5];
//         firstLast[2] = arr[arr.length - 1];
//     }
//     return firstLast;

// }
// console.log(firstMiddleLast([3, 4, 7, 8, 0, 1, 2]))


// // TASK 12 - Write a function to find the average of N elements.Make the function flexible to receive dynamic number or parameters.

// function average() {
//     var sum = 0;
//     var avg = 0;
//     for (var i = 0; i < arguments.length; i++) {
//         sum += arguments[i];
//     }
//     avg = sum / arguments.length;
//     return avg;
// }

// console.log(average(1, 3, 5));


// // TASK 13 - Write a function to find all the numbers greater than the average.

// function numsBiggerThanAvg(arr) {
//     var sum = 0;
//     var avg = 0;
//     var outputArr = [];
//     for (var i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }

//     avg = sum / arr.length;

//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] > avg) {
//             outputArr[outputArr.length] = arr[i];
//         }
//     }
//     return outputArr;
// }

// console.log(numsBiggerThanAvg([1, 5, 6, 4, 2, 1, 7, 9, 13]));


// // TASK 14 - The body mass index(BMI) is the ratio of the weight of a person(in kilograms) to the square of the height(in meters).Write a function that takes two parameters, weight and height, computes the BMI, and prints the corresponding BMI category:
// // Starvation: less than 15
// // Anorexic: less than 17.5
// // Underweight: less than 18.5
// // Ideal: greater than or equal to 18.5 but less than 25
// // Overweight: greater than or equal to 25 but less than 30
// // Obese: greater than or equal to 30 but less than 40
// // Morbidly obese: greater than or equal to 40

// function bmi(weight, height) {
//     var num = 0;
//     num = weight / (height / 100) ** 2;

//     if (num < 15) {
//         return "Idiot, you are starving!";
//     } else if (num < 17.5) {
//         return "Anorexic huh?";
//     } else if (num < 18.5) {
//         return "Little bit underweight";
//     } else if (num < 25) {
//         return "Sexy sexy";
//     } else if (num < 30) {
//         return "Overweight, take it easy";
//     } else if (num < 40) {
//         return "Obese motha'fucka!";
//     } else {
//         return "Jesus Christ, please do not eat!";
//     }

// }
// console.log(bmi(83, 175));


// // TASK 15 - Write a function that takes a list of strings and prints them, one per line, in a rectangular frame.:

// // For example the list["Hello", "World", "in", "a", "frame"] gets printed as:
// // *********
// // * Hello *
// // * World *
// // * in    *
// // * a     *
// // * frame *
// // *********

// function charLongestWord(arr) {
//     var count = 0;
//     var finCount = 0;

//     for (var i = 0; i < arr.length; i++) {
//         for (var j = 0; j < arr[i].length; j++) {
//             count++;
//         }
//         if (count > finCount) {
//             finCount = count;
//             count = 0;
//         } else {
//             count = 0;
//         }
//     }
//     return finCount;
// }


// function printRect(arr) {
//     var longestWordNum = charLongestWord(arr);
//     var firstLast = "";
//     var outputStr = "";

//     for (var i = 0; i < longestWordNum + 4; i++) {
//         for (var j = -1; j < arr.length + 1; j++) {
//             if (j === -1 || j === arr.length) {
//                 outputStr += firstLast + "\n";
//             } else {
//                 outputStr += "* " + arr[j] + "\n";
//             }
//         }
//         // firstLast += "*";
//     }



//     return outputStr;
// }

// console.log(printRect(["Hello", "World", "in", "a", "frame"]));
