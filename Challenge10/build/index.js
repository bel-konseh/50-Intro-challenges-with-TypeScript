"use strict";
let arrSum = (arr) => {
    let i = 0;
    let sum = 0;
    for (i = 0; i <= arr.length - 1; i += 1) {
        sum += arr[i];
    }
    return sum;
};
let b = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arrSum(b));
