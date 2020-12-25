"use strict";


const btn = document.querySelector(".btn");


btn.addEventListener('click', myAnimation);

function myAnimation(){
    const box = document.querySelector(".box");
    let pos = 0;
    const id = setInterval(frame, 5);
    function frame(){
        if(pos <= 300){
            pos++;
            box.style.top = pos + 'px';
            box.style.left = pos + 'px';
        } else {
            clearInterval(id);
        }
    }
}



// //без переменной
// setTimeout(() => console.log("timeout"), 2000);

// const timerId = setTimeout(function(){
//     console.log("without args");
// }, 2000);

// //set args
// const timerId2 = setTimeout(function(args1, args2){
//     console.log(args1 + args2);
// }, 2000, "value1", "value2");

// //name function
// const timerId3 = setTimeout(logger, 2000);

// function logger(){
//     console.log('logger');
// }

// // именнванные таймауты можно удалять
// clearInterval(timerId);

// //вызов фукции с интервалом
// const interval = setInterval(() => console.log("interval"), 1000);