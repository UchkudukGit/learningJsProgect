"use strict";

const arr = [1,10,3,6,5];
arr.forEach(function(item, i) {
    arr.pop();
    console.log(`индекс: ${i} элемент: ${item} массив: ${arr}`);
});
