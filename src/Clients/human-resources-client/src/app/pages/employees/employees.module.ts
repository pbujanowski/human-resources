import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from 'src/app/shared';
import { EmployeesListComponent } from './components';
import { EmployeeCreateComponent } from './components/employee-create/employee-create.component';
import { EmployeeUpdateComponent } from './components/employee-update/employee-update.component';

const routes: Routes = [{ path: 'list', component: EmployeesListComponent }];

@NgModule({
  declarations: [
    EmployeesListComponent,
    EmployeeCreateComponent,
    EmployeeUpdateComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule],
})
export class EmployeesModule {}
