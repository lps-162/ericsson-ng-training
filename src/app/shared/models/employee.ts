export class Employee {
  id: number;
  empNo: string;
  firstName: string;
  lastName: string;
  city: string;

  constructor(empNo: string = '', firstName: string = '',
              lastName: string = '', city: string = '') {
    this.empNo = '';
    this.firstName = firstName;
    this.lastName = lastName;
    this.city = city;
  }
}