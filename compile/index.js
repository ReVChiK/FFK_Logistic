"use strict";
function getNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
console.log(getNumber(1, 10));
