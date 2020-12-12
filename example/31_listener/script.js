"use strict";

const btn = document.querySelector("button"),
    overlay = document.querySelector(".overlay");

// btn.onclick = function(e) {
//     e.target.style.backgroundColor = 'red';
// };

// btn.onmouseout = function(e) {
//     e.target.style.backgroundColor = 'blue';
// };

// btn.onmouseover = function(e) {
//     e.target.style.backgroundColor = 'green';
// };

// btn.addEventListener('click', listener);
// overlay.addEventListener('click', listener);
// function listener(e) {
//     const target = e.currentTarget;
//     console.log(target);
//     console.log(`click = ${target}`);
// }

//Отменить событие
const link = document.querySelector("a");

link.addEventListener('click', (event) => {
    //Эта строка отменяет дефолтные события и должнв быть вверху фукции
event.preventDefault();
console.log(event.target.href);
});

//Дополнительные опции

//Например для одноразового события
btn.addEventListener('click', () => console.log('click'), {once: true});
