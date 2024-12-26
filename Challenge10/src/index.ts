
let arrSum=(arr:number[]):number=>{
    let i:number =0;
    let sum:number = 0;
    for(i=0;i<=arr.length-1; i+=1){
        sum+=arr[i];
    }
    return sum;

}
let b = [1,2,3,4,5,6,7,8,9];
console.log(arrSum(b));