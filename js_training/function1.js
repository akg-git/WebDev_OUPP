
// no parameter and no return
function f1() {
    document.write("no parameter and no return<br>");
}
// have parameter and no return
function f2(func) {
    document.write("have parameter and no return: "+func+"<br>");
}
// no parameter and have return
function f3() {
    document.write("no parameter and have return -->");
    return "null<br>";
}
// have parameter and have return
function f4(fun) {
    document.write("have parameter and have return: "+fun+" -->");
    return fun;
}


f1();
f2("function2");
out3 = f3();
document.write(out3);
out4 = f4("function4");
document.write(out4);