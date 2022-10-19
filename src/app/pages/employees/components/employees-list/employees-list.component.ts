import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ConfirmDialogComponent } from 'src/app/components';
import { ConfirmDialogModel } from 'src/app/models';
import { Employee, EmployeeService } from 'src/app/shared';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css'],
})
export class EmployeesListComponent implements OnInit {
  public dataSource = new MatTableDataSource<Employee>();

  public readonly displayedColumns = [
    'firstName',
    'lastName',
    'personalIdNumber',
    'birthdate',
    'actions',
  ];

  public isLoading = false;

  public getEmployees = () => {
    try {
      this.isLoading = true;
      this.employeeService.getEmployees().subscribe({
        next: (res: Employee[]) => (this.dataSource.data = [...res]),
        error: () =>
          this.showMessage(
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
      next: () => {
        this.showMessage(
          this.getTranslate('models.employee.message.employeeDeleted')
        );
        this.getEmployees();
      },
      error: () =>
        this.showMessage(
          this.getTranslate('models.employee.error.failedToDeleteEmployee')
        ),
    });
  };

  public onRefreshListClick = () => this.getEmployees();

  public onCreateEmployeeClick = () => {
    this.router.navigate(['employees/create']);
  };

  public onUpdateEmployeeClick = (employeeId?: string) => {
    this.router.navigate([`employees/update/${employeeId}`]);
  };

  public onDeleteEmployeeClick = (employeeId?: string) => {
    if (employeeId) {
      const title = this.getTranslate('models.employee.message.deleteEmployee');
      const message = this.getTranslate(
        'models.employee.confirmation.deleteEmployee'
      );
      const dialogData = new ConfirmDialogModel(title, message);
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        data: dialogData,
      });

      dialogRef.afterClosed().subscribe((res: Boolean) => {
        if (res) {
          this.deleteEmployee(employeeId);
        }
      });
    }
  };

  public getTranslate = (key: string) => this.translate.instant(key);

  public getModelTranslate = (property: string) =>
    this.getTranslate(`models.employee.${property}`);

  private showMessage = (message: string) => {
    this.snackBar.open(message, this.getTranslate('common.ok'), {
      duration: 3000,
    });
  };

  constructor(
    private readonly employeeService: EmployeeService,
    private readonly translate: TranslateService,
    private readonly router: Router,
    private readonly dialog: MatDialog,
    private readonly snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.getEmployees();
  }
}
