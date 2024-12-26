"use strict";
let arrAverage = (arr) => {
    let sum = 0;
    let i = 0;
    for (i = 0; i <= arr.length - 1; i += 1) {
        sum += arr[i];
    }
    return sum / (i + 1);
};
