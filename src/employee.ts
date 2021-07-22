

// import axios from 'axios';

class Employee extends Person{

    //  private id: number;

    //  private desg: string;
//     private name:string;

//    constructor(id1:number, name1:string)
//    {
       
//        this.id = id1;
//        this.name = name1;

//    }

   constructor(private id:number, private desg:string)
   {
      super("Jack");

   }

//    greet(txt:string)
//    {

//        console.log(`Greet from Employee.. ${txt}`);

//    }


}

 let employee1 = new Employee(188,"SE");

 let person1 = new Person("ANNA");
// let employee2 = new Employee(200,"jack");

// employee1.id = -33;
// employee1.name = "jhon"


// console.log(employee1);
// console.log(person1);

employee1.greet("");

// person1.greet("");
// employee1.greet("hello");

//=======


interface IEmployeeService
{
   addEmployee(emp:Employee): Employee;
//    updateEmployee(emp:Employee): Employee;
//    deleteEmployee(id:number) : boolean;

}


class EmployeeService implements IEmployeeService{


    public addEmployee(emp:Employee):Employee
    {

        //talk to db and save emp  axios backend call
       return  emp;
    }
}
let empdata = new EmployeeService().addEmployee(new Employee(5000,"SDE3"));

//console.log(empdata);

