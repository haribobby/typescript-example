"use strict";
// import axios from 'axios';
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    //  private id: number;
    //  private desg: string;
    //     private name:string;
    //    constructor(id1:number, name1:string)
    //    {
    //        this.id = id1;
    //        this.name = name1;
    //    }
    function Employee(id, desg) {
        var _this = _super.call(this, "Jack") || this;
        _this.id = id;
        _this.desg = desg;
        return _this;
    }
    return Employee;
}(Person));
var employee1 = new Employee(188, "SE");
var person1 = new Person("ANNA");
// let employee2 = new Employee(200,"jack");
// employee1.id = -33;
// employee1.name = "jhon"
// console.log(employee1);
// console.log(person1);
employee1.greet("");
var EmployeeService = /** @class */ (function () {
    function EmployeeService() {
    }
    EmployeeService.prototype.addEmployee = function (emp) {
        //talk to db and save emp  axios backend call
        return emp;
    };
    return EmployeeService;
}());
var empdata = new EmployeeService().addEmployee(new Employee(5000, "SDE3"));
//console.log(empdata);
