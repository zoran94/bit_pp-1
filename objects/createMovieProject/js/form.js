var $movieForm = document.querySelector('.movie-form');
var $movieTitle = document.querySelector('.movie-form #title');
var $movieLength = document.querySelector('.movie-form #length');
var $movieGenre = document.querySelector('.movie-form #genre');
var $moviesList = document.querySelector('.movies-list');


function renderMovies(arr) {
    $moviesList.textContent = '';
    for (var i = 0; i < arr.length; i++) {
        var p = document.createElement('p');
        p.textContent = arr[i].getData();
        $moviesList.appendChild(p);
    }
}

function resetMovieForm() {
    $movieTitle.value = "";
    $movieLength.value = "";
    $movieGenre.value = "";
}

function getMovieData() {
    return {
        title: $movieTitle.value,
        length: $movieLength.value,
        genre: $movieGenre.value,
    }
}

