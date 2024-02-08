// TOPIC: ARRAY in Typescript
/* // 1. using []
let fruits: string[] = ['apple', 'orange', 'banana'];
console.log(fruits)

// 2. generic Array<>
let arr: Array<string> = ['jackfruit', 'papaya', 'grapes'];
console.log(arr) */
var numarr;
numarr = [100, 120, 30, -40];
// console.log(numarr[1]);
// let x=2;
// console.log(numarr[x]);
//for loop using `in` keyword
for (var i in numarr) {
    console.log(numarr[i]);
}
//for loop using `of` keyword
for (var _i = 0, numarr_1 = numarr; _i < numarr_1.length; _i++) {
    var i = numarr_1[_i];
    console.log(i);
}
