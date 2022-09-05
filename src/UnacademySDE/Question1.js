// map vs foreach

const arr=[2,3,4,5];

const mapResult=map.arr((ar)=>{

    return ar+2
});


const foreachResult=foreach.arr((ar)=>{


    return ar+2
});

console.log(mapResult)//result is 4,5,6,7

console.log(foreachResult)//reslut is does not return anything



// if you updated foreach value
const foreachResult1=foreach.arr((ar,i)=>{

arr[i]= ar+2
});

console.log(foreachResult1)// result is 4,5,6,7