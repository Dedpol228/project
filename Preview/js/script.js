  "use strict";

/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

// Код возьмите из предыдущего домашнего задания

let numberOfFilms;

function start() {
 numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');
    }
}

start();

const personalMovieDB = {
  count: numberOfFilms, 
  movies: {},
  actors: {},
  genres: [],
  privat: false
};


function rememberMyFilms() {
    for (let i = 0; i < 1; i++) {
        const a = prompt('Один из последних просмотренныз фильмов?', ''),
              b = prompt('На сколько оцените егo?', '');
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();

    /*
    for (let i = 0; i < 1; i++) {
        const c = prompt('Какого актера ты любишь больше всего?', ''),
              d = prompt('Сколько хуев он сосал?', '');
    if (c != null && b != null && a != '' && b != '' && c.length < 10) {
        personalMovieDB.actors[c] = d;
        console.log('done')
    } else {
        console.log('error');
        i--;
    } */
       
    function detectPersonalLevel() {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('Error');
        } 
    }

    detectPersonalLevel()

    function showMyDB(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    }
    showMyDB(personalMovieDB.privat);


function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}
writeYourGenres();
      

