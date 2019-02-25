'use strict'
// // TASK 1 - Why pay a fortune teller when you can just program your fortune yourself ?
// //     Write a function named tellFortune that:
// // takes 4 arguments: number of children, partner's name, geographic location, job title.
// // outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// // Call that function 3 times with 3 different values for the arguments.

// function tellFortune(numChild, partnerName, location, job) {
//     return "You will be a " + job + " in " + location + ", and married to " + partnerName + " with " + numChild + " kids.";
// }

// console.log(tellFortune(2, "blabla", "Belgrade", "web developer"));


// // TASK 2 - You know how old your dog is in human years, but what about dog years? Calculate it!

// // Write a function named calculateDogAge that:
// // takes 1 argument: your puppy's age.
// // calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
// // outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
// // Call the function three times with different sets of values.

// // Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years.

// function calculateDogAge(age, conversionRate) {
//     conversionRate = conversionRate || 7;
//     var output = "";
//     output = "Your doggie is " + age * conversionRate + " years old in dog years!";
//     return output;
// }

// console.log(calculateDogAge(6));


// // TASK 3 - Ever wonder how much a "lifetime supply" of your favorite snack is ? Wonder no more!
// // Write a function named calculateSupply that:
// // takes 2 arguments: age, amount per day.
// // calculates the amount consumed for rest of the life(based on a constant max age).
// // outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// // Call that function three times, passing in different values each time.

// //     Bonus: Accept floating point values for amount per day, and round the result to a round number.

// function calculateSupply(age, amountPerDay) {
//     var maxAge = 75;
//     var ageDiff = maxAge - age;
//     var neededAmount = ageDiff * 365 * amountPerDay;

//     var output = "You will need " + neededAmount + " to last you until the ripe old age of " + maxAge;
//     return output;
// }

// console.log(calculateSupply(70, 5));


// // TASK 4 - It's hot out! Let's make a converter based on the steps here.

// // Create a function called celsiusToFahrenheit:
// // Store a celsius temperature into a variable.
// // Convert it to fahrenheit and output "NN°C is NN°F".

// // Create a function called fahrenheitToCelsius:
// // Now store a fahrenheit temperature into a variable.
// // Convert it to celsius and output "NN°F is NN°C."

// function celsiusToFahrenheit(cels) {
//     return cels + "°C is " + (cels * 1.8 + 32) + "°F.";
// }

// function fahrenheitToCelsius(fahrenheit) {
//     return fahrenheit + "°F is " + (fahrenheit - 32) / 1.8 + "°C.";
// }

// console.log(celsiusToFahrenheit(1));
// console.log(fahrenheitToCelsius(70));