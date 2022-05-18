import { Component, OnInit } from '@angular/core';
import { Employee, EmployeeService } from 'src/app/shared';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css'],
})
export class EmployeesListComponent implements OnInit {
  public employees: Employee[] = [];

  public isLoading = false;

  public getEmployees = () => {
    try {
      this.isLoading = true;
      this.employeeService
        .getEmployees()
        .subscribe(res => (this.employees = [...res]));
    } finally {
      this.isLoading = false;
    }
  };

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.getEmployees();
  }
}
