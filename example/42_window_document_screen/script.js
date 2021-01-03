'use strict';

const box = document.querySelector('.box'),
buttonInfo = document.querySelector('#info'),
buttonUp = document.querySelector('#up');

buttonInfo.addEventListener('click', () => {
    const clientHeight = box.clientHeight;
    const clientWidth = box.clientWidth;
    console.log("clientHeight = " + clientHeight);
    console.log("clientWidth = " + clientWidth);

    const offsetHeight = box.offsetHeight;
    const offsetWidth = box.offsetWidth;
    console.log("offsetHeight = " + offsetHeight);
    console.log("offsetWidth = " + offsetWidth);

    const offsetTop = box.offsetTop;
    const offsetLeft = box.offsetLeft;
    console.log("offsetTop = " + offsetTop);
    console.log("offsetLeft = " + offsetLeft);

    const scrollTop = box.scrollTop;
    const scrollHeight = box.scrollHeight;
    console.log("scrollTop = " + scrollTop);
    console.log("scrollHeight = " + scrollHeight);
    console.log(box.getBoundingClientRect());
    console.log(window.getComputedStyle(box));
    console.log("---------------------");
    
});

buttonUp.addEventListener('click', () => {
    box.scrollTop = 0 + 'px';
});