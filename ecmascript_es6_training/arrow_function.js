
//arrow function

arrowFun = (time) => {
    return "Arrow Function is entered at "+ time +"am.  --> If single parameters are used.";
}
//call arrow function
console.log(arrowFun(10));

arrowFun2 = (msg) => "Arrow Function is entered at "+ msg +"  --> If single parameters are used.";
//call arrow function
console.log(arrowFun2("11 am."));

arrowFun3 = () => {
    console.log("Arrow Function is entered!! If single parameters are used.");
}
//call arrow function
arrowFun3();
