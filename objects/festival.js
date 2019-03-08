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
    this.getData = function () {
        return this.title + ", " + this.length + "min, " + this.genre.getData();
    }
}

function Program(date) {
    this.date = new Date(date);
    this.listOfMovies = [];
    this.numOfMovies = 0;

    this.addMovie = function (mov) {
        this.listOfMovies.push(mov);
        this.numOfMovies++;
    };

    this.getData = function () {
        var totalLength = 0;
        for (var i = 0; i < this.listOfMovies.length; i++) {
            totalLength += this.listOfMovies[i].length;
        }
        var firstLine = "\t" + this.date.getDate() + "." + (this.date.getMonth() + 1) + "." + this.date.getFullYear() + ". Program length from all movies: " + totalLength + " minutes.";
        var otherLines = "";
        for (var i = 0; i < this.listOfMovies.length; i++) {
            otherLines += "\n\t\t" + this.listOfMovies[i].getData();
        }
        return firstLine + otherLines;
    }
}

function Festival(name) {
    this.name = name;
    this.listOfPrograms = [];
    this.numOfMovies = 0;

    this.addProgram = function (prog) {
        this.listOfPrograms.push(prog);
        this.numOfMovies += prog.numOfMovies;
    }

    this.getData = function () {
        var firstline = this.name + " festival has " + this.numOfMovies + " movie titles\n";
        var secondline = "";
        for (var i = 0; i < this.listOfPrograms.length; i++) {
            secondline += this.listOfPrograms[i].getData() + "\n";
        }
        return firstline + secondline;
    }
}


// --- The program starts here ---


var main = (function () {

    function createMovie(title, genre, length) {
        return new Movie(title, genre, length);
    }

    function createProgram(date) {
        return new Program(date);
    }

    var action = new Genre('Action');
    var comedy = new Genre('Comedy');
    var drama = new Genre('Drama');

    var spiderman = createMovie('Spider-Man: Homecoming', action, 133);
    var apes = createMovie('War for the Planet of the Apes', drama, 140);
    var darkTower = createMovie('The Dark Tower', action, 95);
    var deadpool = createMovie('Deadpool', comedy, 108);

    var program1 = createProgram('10.28.2017');
    var program2 = createProgram('10.29.2017');

    var weekend = new Festival('Weekend');

    program1.addMovie(spiderman);
    program1.addMovie(apes);
    program1.addMovie(darkTower);
    program2.addMovie(deadpool);

    weekend.addProgram(program1);
    weekend.addProgram(program2);

    console.log(weekend.getData());
})();