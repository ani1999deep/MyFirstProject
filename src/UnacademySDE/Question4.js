let arr = [
    [1, 2],
    [3, 4],
    [5, 6][7, 8, 9],
    [10, 11, 12, 13, 14, 15]
];
//  it is done by one level

let Flattened=[].concat(...arr)

console.log(Flattened);

// Customed method
console.log(arr.flat())


function customFlat(arr,dept=1){

let result=[]

arr.forEach((ar)=>{

    if(Array.isArray(ar)&& dept>0){

        result.push(...customFlat(ar,dept-1));
    }

    else
    {

        result.push(ar);
    }
})

return result;
}