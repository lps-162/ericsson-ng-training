import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../../../shared/models/employee';
import { ActivatedRoute } from '@angular/router';
import { mockEmployees } from '../../../shared/mock-data/mock-employees';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css']
})
export class EmpDetailsComponent implements OnInit {
  name = 'Rakul';
  
  @Input() employee: Employee;
  @Input() pagingEnabled: boolean;
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const empId = +this.route.snapshot.params.id;
    console.log('Employee Id: ', empId);
    this.employee = mockEmployees.find(e => e.id === empId);
  }

  submitEmployee(eventInfo) {
    console.log('New Employee details' , eventInfo);
    this.name = 'Changed Name';
  }

  goBack() {
    history.back();
  }

}