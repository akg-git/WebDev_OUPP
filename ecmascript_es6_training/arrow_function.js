
/* ARROW FUNCTION
===============

Note: If you are not applying curly braces on the single statement, then you do not require to use return, but if you are using curly braces even on the single statement, 
then you must have to use the return keyword. */


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


distance = 30;
time = 4;

speed = (d, t) => "Speed = "+ (d/t);
console.log(speed(distance, time));