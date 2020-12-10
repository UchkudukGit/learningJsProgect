"use strict";

var personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,

    start: function () {
        personalMovieDB.count = +personalMovieDB.question('Сколько фильмов вы уже посмотрели?');
        while (isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +personalMovieDB.question('Сколько фильмов вы уже посмотрели?');
        }
    },

    detectPersonalLevel: () => {
        let numberOfFilms = personalMovieDB.count;
        if (numberOfFilms < 10 && numberOfFilms > 0) {
            alert("Просмотрено довольно мало фильмов");
        } else if (numberOfFilms >= 10 && numberOfFilms < 30) {
            alert("Вы классический зритель");
        } else if (numberOfFilms >= 30) {
            alert("Вы киноман");
        } else {
            alert("Произошла ошибка");
        }
        return numberOfFilms;
    },

    writeYourGenres: (countAnswer) => {
        for (let i = 0; i < countAnswer; i++) {
            let answer = personalMovieDB.question(`Ваш любимый жанр под номером ${i + 1}`);
            personalMovieDB.genres[i] = answer;
        }

        personalMovieDB.genres.forEach((element, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${element}`);
        });
    },

    rememberMyFilms: (countAnswer) => {
        for (let i = 0; i < countAnswer; i++) {
            let name = personalMovieDB.question('Один из последних просмотренных фильмов?');
            while (name.length > 50) {
                name = personalMovieDB.question('Один из последних просмотренных фильмов?');
            }
            let rating = +personalMovieDB.question('На сколько его оцените?');
            while (rating > 10 || rating < 0 || isNaN(rating)) {
                rating = +personalMovieDB.question('На сколько его оцените?');
            }
            personalMovieDB.movies[name] = rating;
        }
    },

    showMyDB: function () {
        if (!personalMovieDB.private) {
            console.log(personalMovieDB);
        }
    },

    toggleVisibleMyDB: function () {
        personalMovieDB.private = personalMovieDB.private ? false : true;
    },

    question: function (questionText) {
        const answer = prompt(questionText, '');
        if (answer == '' || answer == null) {
            alert("Ответ не должен быть пустым");
            return personalMovieDB.question(questionText);
        } else {
            return answer;
        }
    }
};

//personalMovieDB.start();
//personalMovieDB.rememberMyFilms(1);
//personalMovieDB.writeYourGenres(1);
//personalMovieDB.detectPersonalLevel();
//personalMovieDB.showMyDB();

// function writeYourGenres(count){
//     for(let i = 0; i < count; i++){
//         let ganre = question(`Ваш любимый жанр под номером ${i + 1}`);
//         personalMovieDB.genres[i] = ganre;
//     }
// }

// function rememberMyFilms(countAnswer){
//     for(let i = 0; i < countAnswer; i++){
//         let name = question('Один из последних просмотренных фильмов?');
//         while(name.length > 50) {
//             name = question('Один из последних просмотренных фильмов?');
//         }
//         let rating = +question('На сколько его оцените?');
//         while(rating > 10 || rating < 0 || isNaN(rating)) {
//             rating = +question('На сколько его оцените?');
//         }
//         personalMovieDB.movies[name] = rating;
//     }
// }

// function start(){
//     let numberOfFilms = +question('Сколько фильмов вы уже посмотрели?');
//     while(isNaN(numberOfFilms)) {
//         numberOfFilms = +question('Сколько фильмов вы уже посмотрели?');
//     }
//     personalMovieDB.count = numberOfFilms;
// }

// function detectPersonalLevel(){
//     let numberOfFilms = personalMovieDB.count;
//     if(numberOfFilms < 10 && numberOfFilms > 0) {
//         alert("Просмотрено довольно мало фильмов");
//     } else if(numberOfFilms >= 10 && numberOfFilms < 30) {
//         alert("Вы классический зритель");
//     } else if (numberOfFilms >= 30) {
//         alert("Вы киноман");
//     } else {
//         alert("Произошла ошибка");
//     }
//     return numberOfFilms;
// }

// function question(questionText){
//     const answer = prompt(questionText, '');
//     if (answer == '' || answer == null){
//         alert("Ответ не должен быть пустым");
//         return question(questionText);
//     } else {
//         return answer;
//     }
// }