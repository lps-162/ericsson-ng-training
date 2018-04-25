import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Employee } from '../../../shared/models/employee';

@Component({
  selector: 'app-emp-create',
  templateUrl: './emp-create.component.html',
  styleUrls: ['./emp-create.component.css']
})
export class EmpCreateComponent implements OnInit {
  employee: Employee = new Employee();
  @Output() empCreated = new EventEmitter<Employee>();
  
  constructor() { }

  ngOnInit() {
  }

  submitEmployee() {
    console.log(this.employee);
    this.empCreated.emit(this.employee);
    this.employee = new Employee();
  }



}
