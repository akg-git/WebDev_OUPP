/*
There are 3 ways to construct array in JavaScript

1. array literal
2. creating instance of Array directly (using new keyword)
3. using an Array constructor (using new keyword)
*/

// 1. array literal
var arr1 = ["j", 234, "sohan", 324.6]
document.write("arr1 = "+arr1+"<br>");
//print array
for(i=0; i<arr1.length;i++){
    document.write(arr1[i]+" <br>");
}

// 2. create instance
arr1 = new Array();
arr1[0] = 5;
arr1[1] = 'D';
arr1[2] = "Socket";
arr1[3] = -235.2;
arr1[4] = 22/7;

document.write("<bR><br>Array 1: "+arr1);
//print array
for(i=0; i<arr1.length;i++){
    document.write(arr1[i]+" <br>");
}

// 3. Array Constructor
let arr = new Array("xerox", "havels", 5, 8.2, -32.546);
document.write("<bR><br>Array: "+arr+"<br>");
//print array
for(i=0; i<arr.length;i++){
    document.write(arr[i]+" <br>");
}