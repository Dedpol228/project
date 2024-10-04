  "use strict";

  const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');

  const personalMovieDB = {
    count: numberOfFilms, 
    movies: {},
    actors: {},
    genres: [],
    privat: false
  };

  const a = prompt('Один из последних просмотренныз фильмов?', ''),
        b = prompt('На сколько оцените егo?', ''),
        c = prompt('Один из последних просмотренныз фильмов?', ''),
        d = prompt('На сколько оцените егo?', '');

 personalMovieDB.movies[a] = b;
 personalMovieDB.movies[c] = d;

 console.log( personalMovieDB);