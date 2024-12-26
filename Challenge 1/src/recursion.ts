
let fact = (n: number): number => {
    return n <= 1 ? 1 : n * fact(n - 1);
}
let m = (prompt("enter number to get it's factorial" ));
if (m) {
    let n: number = parseInt(m);
    console.log(fact(n))
}