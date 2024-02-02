/*
Object in javascript can be created in 3 ways:

1. object literal
2. create new instance (using new keyword)
3. create object constructor (using new keyword)
*/

// 1. object literal

emp = {id:110, name:"rohan", salary:32400.40}

document.write("<u>Employee Details</u><br>")
document.write("id: "+emp.id+"<br>name: "+emp.name+"<br>salary: "+emp.salary+"<br><br>");

// 2. create new instance

var emp = new Object();
emp.id = 111;
emp.name = "sohan"
emp.salary = 21454.35

document.write("<u>Employee Details</u><br>")
document.write("id: "+emp.id+"<br>name: "+emp.name+"<br>salary: "+emp.salary+"<br><br>");

// 3. create object constructor

function empdetails(id, name, salary){

    this.id = id
    this.name = name
    this.salary = salary

}

emp = new empdetails(112, "sobhan", 236547.32)

document.write("<u>Employee Details</u><br>")
document.write("id: "+emp.id+"<br>name: "+emp.name+"<br>salary: "+emp.salary+"<br><br>");