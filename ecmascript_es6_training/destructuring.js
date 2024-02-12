var colors = ["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "Red"];  
  
// destructuring assignment  using SPREAD(...) operator
var [a,b,...args] = colors;  
console.log(a);   
console.log(b);   
console.log(args);  

//swapping operation
var x = 100, y = 200;  
console.log("Before swapping\n")
console.log("x = "+x); // 200  
console.log("y = "+y); // 100  

//swapping logic
[x, y] = [y, x];  

console.log("\nAfter Swapping:\n")
console.log("x = "+x); // 200  
console.log("y = "+y); // 100  