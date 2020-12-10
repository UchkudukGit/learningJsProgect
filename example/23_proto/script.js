"use strict";

const soldier ={
    health: 400,
    armor: 100
};

// const jonh = {
//     health: 50
// };
//Old format
//jonh.__proto__ = soldier;

//New runtime set prototype
//Object.setPrototypeOf(jonh, soldier);

//New set prototype while create obj
const jonh = Object.create(soldier);

console.log(jonh.armor);