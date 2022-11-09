import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Employee, EmployeeService } from 'src/app/employee';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css'],
})
export class EmployeeUpdateComponent implements OnInit {
  public employeeForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    personalIdNumber: new FormControl('', [Validators.required]),
    birthdate: new FormControl('1990-01-01', [Validators.required]),
  });

  public get employeeId() {
    return this.activatedRoute.snapshot.paramMap.get('employeeId') || undefined;
  }

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
        id: this.employeeId,
        firstName: this.firstName?.value,
        lastName: this.lastName?.value,
        personalIdNumber: this.personalIdNumber?.value,
        birthdate: this.birthdate?.value,
      };
      this.employeeService.updateEmployee(employee).subscribe({
        next: () => {
          this.showMessage(
            this.getTranslate('models.employee.message.employeeUpdated')
          );
          this.router.navigate(['employees/list']);
        },
        error: () => {
          this.showMessage(
            this.getTranslate('models.employee.error.failedToUpdateEmployee')
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

  private getEmployeeById = (employeeId: string) => {
    this.employeeService.getEmployeeById(employeeId).subscribe({
      next: res => {
        console.log(`EMPLOYEE: ${JSON.stringify(res)}`);
        this.employeeForm.patchValue({
          firstName: res.firstName,
          lastName: res.lastName,
          personalIdNumber: res.personalIdNumber,
          birthdate: res.birthdate,
        });
      },
    });
  };

  constructor(
    private readonly translate: TranslateService,
    private readonly employeeService: EmployeeService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router,
    private readonly snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    if (this.employeeId) {
      this.getEmployeeById(this.employeeId);
    }
  }
}
