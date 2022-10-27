import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from 'src/app/shared';
import { EmployeesListComponent } from './components';
import { EmployeeCreateComponent } from './components/employee-create/employee-create.component';
import { EmployeeUpdateComponent } from './components/employee-update/employee-update.component';
import { EmployeeModule } from 'src/app/employee';

const routes: Routes = [
  { path: 'list', component: EmployeesListComponent },
  { path: 'create', component: EmployeeCreateComponent },
  { path: 'update/:employeeId', component: EmployeeUpdateComponent },
];

@NgModule({
  declarations: [
    EmployeesListComponent,
    EmployeeCreateComponent,
    EmployeeUpdateComponent,
  ],
  imports: [
    CommonModule,
    EmployeeModule,
    RouterModule.forChild(routes),
    SharedModule,
  ],
  exports: [RouterModule],
})
export class EmployeesModule {}
