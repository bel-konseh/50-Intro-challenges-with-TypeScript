"use strict";
let isEven = (n) => {
    return n % 2 == 0;
};
let i;
let sum = 0;
for (i = 20; i <= 30; i += 1) {
    if (isEven(i)) {
        sum += i;
    }
}
