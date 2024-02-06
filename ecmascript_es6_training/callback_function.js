const message = " callback is a formal parameter.";

// function myfun(name){
//     return "Hi " + name+"!";
// }

//callback through anonymous function
// a = function (name) {
//     return "Hi " + name+"!";
// }

a = () => "``callback with anonymous``";

//CALLBACK function implementation
function mycallback(callback){
    //call the callback parameter to display output
    console.log(callback("YourName"));
}

//FUNCTION CALL 

// NOTE: no parenthis required while passing function as argument
// mycallback(myfun)
mycallback(a);





//PRACTICE

function display(){
    console.log("Sum is ");
}
// add = (a,b,callback) =>{
//     callback();
//     console.log(a+b);
// }

//This technique is called callback --> calling a function recieved as parameter
add = (a,b,display) =>{
    display();
    console.log(a+b);
}

add(12, 23, display);
