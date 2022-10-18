import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { en_US, NzI18nService, pl_PL } from 'ng-zorro-antd/i18n';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Employee, EmployeeService } from 'src/app/shared';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css'],
})
export class EmployeeCreateComponent implements OnInit {
  @Output()
  public created = new EventEmitter();

  @Output()
  public failed = new EventEmitter();

  public employeeForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    personalIdNumber: new FormControl('', [Validators.required]),
    birthdate: new FormControl(new Date('1990-01-01'), [Validators.required]),
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
          this.showSuccess(
            this.getTranslate('models.employee.message.employeeCreated')
          );
          this.created.emit();
        },
        error: () => {
          this.showError(
            this.getTranslate('models.employee.error.failedToCreateEmployee')
          );
          this.failed.emit();
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

  private showSuccess = (message: string) => {
    this.message.success(message);
  };

  private showError = (message: string) => {
    this.message.error(message);
  };

  private getNzLocale = () => {
    switch (this.translate.defaultLang) {
      case 'en':
        return en_US;
      case 'pl':
        return pl_PL;
      default:
        return en_US;
    }
  };

  constructor(
    private translate: TranslateService,
    private i18n: NzI18nService,
    private message: NzMessageService,
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    this.i18n.setLocale(this.getNzLocale());
  }
}
