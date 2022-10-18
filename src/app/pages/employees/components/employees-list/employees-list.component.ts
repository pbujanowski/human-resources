import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Employee, EmployeeService } from 'src/app/shared';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css'],
})
export class EmployeesListComponent implements OnInit {
  public employees: Employee[] = [];

  public selectedEmployee?: Employee;

  public isEmployeeCreateModalVisible = false;

  public isEmployeeUpdateModalVisible = false;

  public isLoading = false;

  public getEmployees = () => {
    try {
      this.isLoading = true;
      this.employeeService.getEmployees().subscribe({
        next: (res: Employee[]) => (this.employees = [...res]),
        error: () =>
          this.showError(
            this.getTranslate(
              'models.employee.error.failedToLoadListOfEmployees'
            )
          ),
      });
    } finally {
      this.isLoading = false;
    }
  };

  public deleteEmployee = (id: string) => {
    this.employeeService.deleteEmployee(id).subscribe({
      next: () => this.getEmployees(),
      error: () =>
        this.showError(
          this.getTranslate('models.employee.error.failedToDeleteEmployee')
        ),
    });
  };

  public onRefreshListClick = () => this.getEmployees();

  public onCreateEmployeeClick = () => {
    this.isEmployeeCreateModalVisible = true;
  };

  public onUpdateEmployeeClick = (employee?: Employee) => {
    this.selectedEmployee = employee;
    this.isEmployeeUpdateModalVisible = true;
  };

  public onDeleteEmployeeClick = (id?: string) => {
    if (id) {
      this.deleteEmployee(id);
    }
  };

  public onEmployeeCreated = () => {
    this.isEmployeeCreateModalVisible = false;
    this.getEmployees();
  };

  public onEmployeeUpdated = () => {
    this.isEmployeeUpdateModalVisible = false;
    this.getEmployees();
  };

  public onEmployeeCreateModalClose = () => {
    this.isEmployeeCreateModalVisible = false;
  };

  public onEmployeeUpdateModalClose = () => {
    this.isEmployeeUpdateModalVisible = false;
  };

  public getTranslate = (key: string) => this.translate.instant(key);

  private showError = (message: string) => {
    this.message.error(message);
  };

  constructor(
    private employeeService: EmployeeService,
    private message: NzMessageService,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.getEmployees();
  }
}
