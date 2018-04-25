import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../../../shared/models/employee';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css']
})
export class EmpDetailsComponent implements OnInit {
  name = 'Rakul';
  
  @Input() employee: Employee;
  @Input() pagingEnabled: boolean;
  
  constructor() { }

  ngOnInit() {
  
  }

  submitEmployee(eventInfo) {
    console.log('New Employee details' , eventInfo);
    this.name = 'Changed Name';
  }

}
