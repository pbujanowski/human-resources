import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Employee, EmployeeService } from 'src/app/shared';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css'],
})
export class EmployeeCreateComponent {
  public employeeForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    personalIdNumber: new FormControl('', [Validators.required]),
    birthdate: new FormControl('1990-01-01', [Validators.required]),
  });

  public get firstName() {
    return this.employeeForm.get('firstName');
  }

  public get lastName() {
    return this.employeeForm.get('lastName');
  }

  public get personalIdNumber() {
    return this.employeeForm.get('personalIdNumber');
  }

  public get birthdate() {
    return this.employeeForm.get('birthdate');
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.employeeForm.controls[controlName].hasError(errorName);
  };

  public getEmployeeLabel = (key: string) => {
    return this.getTranslate(`models.employee.${key}`);
  };

  public getTranslate = (key: string) => this.translate.instant(key);

  public getValidation = (key: string) =>
    this.getTranslate(`models.employee.validation.${key}`);

  public onFormSubmit = () => {
    if (this.employeeForm.valid) {
      const employee: Employee = {
        firstName: this.firstName?.value,
        lastName: this.lastName?.value,
        personalIdNumber: this.personalIdNumber?.value,
        birthdate: this.birthdate?.value,
      };
      this.employeeService.createEmployee(employee).subscribe({
        next: () => {
          this.showMessage(
            this.getTranslate('models.employee.message.employeeCreated')
          );
          this.router.navigate(['employees/list']);
        },
        error: () => {
          this.showMessage(
            this.getTranslate('models.employee.error.failedToCreateEmployee')
          );
        },
      });
    } else {
      Object.values(this.employeeForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  };

  public onFormCancel = () => this.router.navigate(['employees/list']);

  private showMessage = (message: string) => {
    this.snackBar.open(message, this.getTranslate('common.ok'), {
      duration: 3000,
    });
  };

  constructor(
    private readonly translate: TranslateService,
    private readonly employeeService: EmployeeService,
    private readonly router: Router,
    private readonly snackBar: MatSnackBar
  ) {}
}
