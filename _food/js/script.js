"use strict";

document.addEventListener("DOMContentLoaded", () => {

    //chose tabs ------

    const tabContainer = document.querySelector(".tabheader__items"),
        tabList = tabContainer.querySelectorAll(".tabheader__item"),
        tabcontentList = document.querySelectorAll(".tabcontent");


    clear();
    chose(0);


    tabContainer.addEventListener('click', e => {
        const target = e.target;
        if (target && target.classList.contains("tabheader__item")) {
            clear();
            tabList.forEach((item, i) => {
                if (item == target) {
                    chose(i);
                }
            });
        }
    });


    function chose(index) {
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

    //SET TIME -------

    setClock('.timer', new Date(new Date().getTime() + 24 * 60 * 60 * 1000));

    function setClock(selector, endTime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000, endTime);

        updateClock(endTime);

        function updateClock(endDate) {
            const t = getTimeremaining(endDate);
            days.textContent = addZero(t.days);
            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    function getTimeremaining(endTime) {
        const t = (Date.parse(endTime) - Date.parse(new Date())) / 1000;
        const seconds = Math.floor(t % 60),
            minutes = Math.floor(t / 60) % 60,
            hours = Math.floor(t / 60 / 60) % 24,
            days = Math.floor(t / 60 / 60 / 24);
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function addZero(num) {
        if (num >= 0 && num < 10){
            return `0${num}`;
        }
        return num;
    }

});