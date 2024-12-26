"use strict";
let isPrime = (n) => {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0)
            return false;
    }
    return true;
};
console.log(isPrime(7));