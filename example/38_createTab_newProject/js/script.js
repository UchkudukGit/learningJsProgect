"use strict";

console.log(1);

document.addEventListener("DOMContentLoaded", () => {
    const tabContainer = document.querySelector(".tabheader__items"),
        tabList = tabContainer.querySelectorAll(".tabheader__item"),
        tabcontentList = document.querySelectorAll(".tabcontent");


    clear();
    chose(0);

    tabContainer.addEventListener('click', e => {
        const target = e.target;
        if(target && target.classList.contains("tabheader__item")){
            clear();
            tabList.forEach((item, i) => {
                if(item == target){
                    chose(i);
                }
            });
        }
    });


    function chose(index){
        clear();
        tabList[index].classList.add("tabheader__item_active");
        tabcontentList[index].classList.add('show', 'fade');
        tabcontentList[index].classList.remove('hide');
    }

    function clear() {
        tabcontentList.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });
    
        tabList.forEach(item => {
            item.classList.remove("tabheader__item_active");
        });
    }
});