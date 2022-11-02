import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from 'src/app/shared';
import {
  EmployeeCreateComponent,
  EmployeeUpdateComponent,
  EmployeesListComponent,
} from './components';
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
