"use strict";

const personalMovieDB = {
    count: countMuvies(),
    movies: {},
    actors: {},
    genres: [],
    private: false
};

lastFilms(2);

// const a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = +prompt('На сколько его оцените?', ''),
//       c = prompt('Один из последних просмотренных фильмов?', ''),
//       d = +prompt('На сколько его оцените?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

function lastFilms(countAnswer){
    for(let i = 0; i < countAnswer; i++){
        let name = question('Один из последних просмотренных фильмов?');
        while(name == null || name.length > 50) {
            alert("Название фильма должно содержать не более 50 символов или быть пустым");
            name = question('Один из последних просмотренных фильмов?');
        }
        let rating = +question('На сколько его оцените?');
        while(rating > 10 || rating < 0 || isNaN(rating)) {
            alert("Рейтинг должен быть от 0 до 10");
            rating = +question('На сколько его оцените?');
        }
        personalMovieDB.movies[name] = rating;
    }
}

function countMuvies(){
    let numberOfFilms = +question('Сколько фильмов вы уже посмотрели?');
    if(numberOfFilms < 10 && numberOfFilms > 0) {
        alert("Просмотрено довольно мало фильмов");
    } else if(numberOfFilms >= 10 && numberOfFilms < 30) {
        alert("Вы классический зритель");
    } else if (numberOfFilms >= 30) {
        alert("Вы киноман");
    } else {
        alert("Произошла ошибка, ответе заново");
        numberOfFilms = countMuvies();
    }
    return numberOfFilms;
}

function question(questionText){
    const answer = prompt(questionText, '');
    if (answer == ''){
        alert("Ответ не должен быть пустым");
        return question(questionText);
    } else {
        return answer;
    }
}

