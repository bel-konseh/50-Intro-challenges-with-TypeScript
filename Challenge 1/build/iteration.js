"use strict";
let fac = (n) => {
    let i = 1;
    if (n < 2) {
        return i;
    }
    while (n > 1) {
        i *= n;
        n -= 1;
    }
    return i;
};
console.log(fac(8));
