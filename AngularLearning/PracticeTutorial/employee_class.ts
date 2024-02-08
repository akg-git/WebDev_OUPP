
class Employee{

    id:number;
    name:string;

    constructor(id:number, name:string){
        this.id = id;
        this.name=name;
    }

    displayEmployeeDetails(){
        console.log(this.id+" "+this.name);
    }

}

let e1 = new Employee(102, "Champak Lal");
e1.displayEmployeeDetails()