let positives = (arr: number[])=>{
    let posArr:number[]=[];
    for(let i:number =0; i<arr.length; i+=1){
        if(arr[i]>=0){
            //Zero is assumed to be positive
            posArr.push(arr[i]);
        }
    }
    return posArr
}
console.log(positives([-2,0, 0,-3,4,5,-7]))