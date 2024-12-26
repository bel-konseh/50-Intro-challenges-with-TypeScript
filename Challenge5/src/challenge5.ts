let i: number;
let j: number;
for (i = 1; i <= 10; i += 1) {
    console.log(`\n Multiplication table for ${i}\n`);
    for (j = 1; j <= 12; j += 1) {
        console.log(` ${i} * ${j}  = ${i * j}`);
    }
}