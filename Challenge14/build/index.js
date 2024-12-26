"use strict";
const fib = (n) => {
    let fibList = [];
    let num = 0;
    for (let i = 0; i < n; i++) {
        if (i < 0)
            return fibList;
        else if (i <= 1) {
            fibList.push(i);
            num = i;
        }
        else {
            fibList.push(fibList[i - 1] + fibList[i - 2]);
        }
    }
    return fibList;
};
console.log(fib(10));
