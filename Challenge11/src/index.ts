

let arrAverage = (arr: number[]) => {
    let sum: number = 0;
    let i: number = 0;

    for (i = 0; i <= arr.length-1; i += 1) {
        sum+=arr[i];
    }
    return sum/(i+1)
}