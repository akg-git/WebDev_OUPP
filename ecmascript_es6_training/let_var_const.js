/*
// let
// let x = 23;
// let y;
// y=321;

// console.log(x+" "+y);

// var
// var a = 213;
// var b;
// b=1;

// console.log(a+" "+b);

// const
// const a = 213;

// error: declaration must be initialized
// const b;
// b=1;

// console.log(a+" "+b);
*/

/*
// let x =30;
// console.log(x);
// let x=40;
// console.log(x);


// var y = 2;
// console.log(y)
// var y = 3;
// console.log(y);
*/


/*
var a =12;
if(true){
    var a = 24;
    console.log(a);
}
console.log(a);
//output: 24 24
//reason: As var allows redeclaration

let f =12;
if(true){
    let f = 24;
    console.log(f); //24
}
console.log(f); //12
//output:  24 12
//reason: As var allows redeclaration
*/



/*
for(var i=1; i<=10; i++){
    console.log(i);
}
console.log(i);
//output: 1 to 11

for(let j=1; j<=10; j++){
    console.log(j);
}
console.log(j);
//output: 1 to 10 then error
*/

/*
var i;
console.log(i);
for( i=1; i<=10; i++){
    console.log(i);
}
console.log(i);
//output: 1 to 11

let j;
console.log(j);
for( j=1; j<=10; j++){
    console.log(j);
}
console.log(j);
//output: 1 to 11
*/

const greeting = {
    message: "say Hi",
    times: 4
}
console.log(greeting);  // {message: "say Hi", times: 4}

// greeting = {
//     message: "hello",
//     times: 5
// }
// console.log(greeting);  //// error:  Assignment to constant variable.

greeting.message = "hello";
greeting.times = 5;
console.log(greeting);  // {message: "hello", times: 5}
