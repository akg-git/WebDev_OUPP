class Welcome
{
    // shouldn't use `function` keyword while creating function inside class
     show()
     {
        console.log("This is example of a Sample function inside User defined Typescript Class")

     }

}

let showref = new Welcome();
showref.show();