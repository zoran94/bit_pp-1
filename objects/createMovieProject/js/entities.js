function Genre(genre) {
    this.genre = genre;
    this.getData = function () {
        return this.genre[0].toUpperCase() + this.genre[this.genre.length - 1].toUpperCase();
    }
}

function Movie(title, length, genre) {
    this.title = title;
    this.length = length;
    this.genre = genre;
    this.getData = function () {
        return this.title + ", " + this.length + ", " + this.genre.getData();
    }
}



function createMovie(title, length, genre) {
    var newGenre = new Genre(genre);
    return new Movie(title, length, newGenre);
}