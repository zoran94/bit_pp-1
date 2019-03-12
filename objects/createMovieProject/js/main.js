var $createMovie = document.querySelector('.movie-form button');
var movies = [];
$createMovie.addEventListener('click', onCreateMovie);

function onCreateMovie(e) {
    e.preventDefault();

    var movieData = getMovieData();

    var newMovie = createMovie(movieData.title, movieData.length, movieData.genre);

    movies.push(newMovie);

    renderMovies(movies);
    resetMovieForm();
}
