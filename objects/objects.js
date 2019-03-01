
'use strict'
// // TASK 1 - Create an object that represents your favourite coffee. Please include coffee name, strength, flavour, milk, sugar, … everything you like!

// var favCoffe = {
//     name: 'homemade',
//     strength: 'mild',
//     milk: false,
//     sugar: false,
// }


// // TASK 2 - Create an object that represents your favourite movie. Please include title, actors, director, genre, popularity

// var favMovie = {
//     title: 'John Wick',
//     actors: ['Keanu Reeves', 'Alfie Allen'],
//     director: 'Chad Stahelski',
//     genre: 'action',
//     popularity: 'very popular',
// }


// // TASK 3 - Write a function that creates an object that represent a computer program.Each program is described by: description, programming language, git repository, boolean status that says if the program is completed or not.Add a method that prints out program’s repository, a method that checks if the program is written in JavaScript as well as a method that checks if program is completed or not.

// function createProgram(desc, lang, repo, bool) {
//     var output = {
//         description: desc,
//         programmingLanguage: lang,
//         gitRepository: repo,
//         completed: bool,
//         printRepo: function () {
//             if (this.completed === true) {
//                 console.log("Program is completed.");
//             } else {
//                 console.log("Program is not completed.");
//             }
//         },
//         checkJS: function () {
//             if (this.programmingLanguage === "JS") {
//                 console.log("Yes it is.");
//             } else {
//                 console.log("No it's not.");
//             }
//         },
//     }
//     return output;
// }

// var sumProgram = createProgram("Sums everything", "JS", "chkemi", true);
// sumProgram.printRepo();
// sumProgram.checkJS();


// // TASK 4 - Write a function that creates an object that represents a culinary recipe.Each recipe is described by: name, type of cuisine, complexity(value from 1 to 5), list of ingredients, preparing time, preparing instruction.
// // Add a method that prints out all the ingredients necessary for the meal preparation. 
// // Add a method that checks if a meal can be prepared for 15 minutes. 
// // Add a method that changes the type of cuisine to the given value.
// // Add a method that delete a given ingredient from the list of ingredients.


// function createRecipe(n, t, compl, list, ptime, pinst) {
//     var output = {
//         name: n,
//         typeOfCuisine: t,
//         complexity: compl,
//         listOfIngredients: list,
//         preparingTime: ptime,
//         preparingInstructions: pinst,
//         printIngredients: function () {
//             console.log(this.listOfIngredients);
//         },

//         in15Min: function () {
//             if (this.preparingTime < 16) {
//                 console.log("It can be prepared in 15 minutes");
//             } else {
//                 console.log("No it cant be prepared in 15 minutes");
//             }
//         },

//         changeCuisine: function (a) {
//             this.typeOfCuisine = a;
//         },

//         deleteIng: function (ingred) {
//             var outputArr = [];
//             for (var i = 0; i < this.listOfIngredients.length; i++) {
//                 if (this.listOfIngredients[i] === ingred) {
//                     continue;
//                 }
//                 outputArr[outputArr.length] = this.listOfIngredients[i];
//             }
//             this.listOfIngredients = outputArr;
//         }
//     }
//     return output;
// }

// var myRecipe = createRecipe("Sapke", "French", 5, ["eggs", "milk"], 10, "Boil eggs and add milk!");
// myRecipe.printIngredients();
// myRecipe.in15Min();

// console.log(myRecipe.typeOfCuisine);
// myRecipe.changeCuisine("Italian")
// console.log(myRecipe.typeOfCuisine);

// myRecipe.deleteIng("eggs");
// console.log(myRecipe.listOfIngredients);