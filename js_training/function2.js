
// no parameter and no return
function sum1() {
    document.write("No Sum Operation<br>");
}
// have parameter and no return
function sum2(a,b) {
    res=a+b;
    document.write("Addition: "+res+"<br>");
}
// no parameter and have return
function sum3() {
    a=10
    b=20
    res = a+b;
    // document.write("Addition: "+res+" - ");
    return res+"<br>";
}
// have parameter and have return
function sum4(c,d) {
    res=c+d;
    // document.write("<br>Addition: "+res);
    return res+"<br>";
}


sum1();
sum2(5, 7);
out3 = sum3();
document.write(out3);
out4 = sum4(20,32);
document.write(out4);