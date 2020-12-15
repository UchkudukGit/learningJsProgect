"use strict";

const btnPanel = document.querySelector(".buttons-panel");

btnPanel.addEventListener('mouseover', (e) => {
    const target = e.target;
    if (target.tagName == "BUTTON") {
        target.classList.add("green");
    }
});

btnPanel.addEventListener('mouseout', (e) => {
    const target = e.target;
    if (target.tagName == "BUTTON") {
        target.classList.remove("green");
    }
});