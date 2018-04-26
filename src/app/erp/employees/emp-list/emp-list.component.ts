import { Component, OnInit } from '@angular/core';
import { Employee } from '../../../shared/models/employee';
import { mockEmployees } from '../../../shared/mock-data/mock-employees';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {
  cols: any[];

  employees: Employee[];
  selectedEmployee: Employee;
  routerLinkArray = ['/employees', 'create'];

  constructor(private router: Router) { 

  }

  ngOnInit() {
    this.cols = [
      { field: 'id', header: 'Id'},
      { field: 'empNo', header: 'Emp No'},
      { field: 'firstName', header: 'First Name'},
      { field: 'lastName', header: 'Last Name'},
      { field: 'city', header: 'City'},
    ];

    this.employees = mockEmployees;
   
  }

  handleEmpCreation(newEmp: Employee) {
    console.log('I am in the parent, event emitted');
    this.employees.push(newEmp);
  }

  onRowSelect(eventInfo) {
    const emp = eventInfo.data;
    const routerLinkArr = ['/employees', emp.id]
    this.router.navigate(routerLinkArr);
  }
}
