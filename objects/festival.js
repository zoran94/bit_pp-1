'use strict'

function Genre(name) {
    this.name = name;
    this.getData = function () {
        return this.name[0].toUpperCase() + this.name[this.name.length - 1].toUpperCase();
    }
}

function Movie(title, genre, length) {
    this.title = title;
    this.genre = genre;
    this.length = length;
}

function Program(date, numOfMovies) {
    this.date = date;
    this.listOfMovies = [];
    this.numOfMovies = numOfMovies;
}

function Festival(name, numOfMovies) {
    this.name = name;
    this.listOfPrograms = [];
    this.numOfMovies = numOfMovies;
}


// --- The program starts here! ---


var main = (function () {

    var action = new Genre('Action');
    var comedy = new Genre('Comedy');
    var drama = new Genre('Drama');
    console.log(comedy.getData());

})();