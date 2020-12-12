/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const addForm = document.querySelector('.add'),
        inputFilm = addForm.querySelector('.adding__input'),
        isFavorite = addForm.querySelector("[type='checkbox']");


    createMovieList(movieDB.movies);

    addForm.addEventListener('submit', addFilm);

    // function deleteMovie(e) {
    //     const parent = e.target.parentElement;
    //     const text = e.target.previousSibling.textContent;
    //     const movies = movieDB.movies;
    //     for (let i = 0; i < movies.length; i++) {
    //         if (text.indexOf(movies[i]) != -1) {
    //             movies.splice(i, 1);
    //             break;
    //         }
    //     }
    //     parent.remove();
    //     createMovieList(movieDB.movies);
    // }

    function addFilm(formEvent) {
        formEvent.preventDefault();
        const movie = inputFilm.value;
        if (movie) {
            const movies = movieDB.movies;
            movies.push(trimMovie(movie));
            if (isFavorite.checked) {
                console.log("Добавляем любимый фильм");
            }
            createMovieList(movies);
        }
        formEvent.target.reset();
    }

    function createMovieList(moviesList) {
        const movieListEl = document.querySelector(".promo__interactive-list");
        movieListEl.innerHTML = '';
        moviesList
            .sort()
            .forEach((film, i) => {
                movieListEl.innerHTML += `
                    <li class="promo__interactive-item">${i + 1} ${film}
                        <div class="delete"></div>
                    </li>
                `;
            });
        document
            .querySelectorAll(".promo__interactive-list .delete")
            .forEach((btn, i) => {
                btn.addEventListener(
                    'click',
                    () => {
                        btn.parentElement.remove();
                        movieDB.movies.splice(i, 1);
                        createMovieList(moviesList);
                    },
                    { once: true });
            });
    }

    function trimMovie(movie) {
        if (movie.length > 21) {
            return movie.slice(0, 21) + "...";
        }
        return movie;
    }
});