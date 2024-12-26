"use strict";
let maxNumber = (arr) => {
    let max = arr[0];
    arr.forEach(element => {
        if (element > max) {
            max = element;
        }
    });
    return max;
};
console.log(maxNumber([3, 5, 7, 8, -3, 6])); //8
