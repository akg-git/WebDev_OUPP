
//function

message = "Function is an object in Javascript. <br>"+
        " We can pass a function as parameter.";

sayHello(); //function hoisting

function sayHello(){
    console.log("display Hello!!!")
}
//call normal function
// sayHello();

//rest parameter
function fun1(x, ...argss){
    let prod=x;
    argss.forEach(element => {
        if(element%2==1)
            prod+=element;
        if(element%2==0)
            prod-=element;
    });
    return prod;
}
console.log("Final Product = "+fun1(31,10,20,11));