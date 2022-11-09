import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { MaterialModule } from 'src/app/material';
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
    ReactiveFormsModule,
    MaterialModule,
  ],
  exports: [RouterModule],
})
export class EmployeesModule {}
