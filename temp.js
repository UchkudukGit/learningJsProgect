"use strict";

const obj = {
    name: "vova",
    credentions: {
        login: "log",
        pass: "12345"
    }
};

const add = {
    isTrue: true
};

console.log(Object.assign(obj, add.isTrue));
