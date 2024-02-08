// TOPIC: ARRAY in Typescript


/* // 1. using []
let fruits: string[] = ['apple', 'orange', 'banana'];
console.log(fruits)

// 2. generic Array<>
let arr: Array<string> = ['jackfruit', 'papaya', 'grapes'];
console.log(arr) */

let numarr:number[]
numarr = [100, 120, 30, -40];

// console.log(numarr[1]);
// let x=2;
// console.log(numarr[x]);

//for loop using `in` keyword
//note: in extracts index of array
for(let i in numarr)
{
    console.log(numarr[i]);
}

//for loop using `of` keyword
//note: of extracts value of array
for(let i of numarr)
{
    console.log(i);
}
