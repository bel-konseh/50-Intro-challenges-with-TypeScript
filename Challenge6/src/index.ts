
let isEven = (n: number): boolean => {
    return n % 2 == 0;
};
let i: number;
let sum:number =0;
for (i = 20; i <= 30; i += 1) {
    if(isEven(i)){
        sum+=i;
    }
}