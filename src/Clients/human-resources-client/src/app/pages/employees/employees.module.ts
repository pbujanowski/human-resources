import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from 'src/app/shared';
import { EmployeesListComponent } from './components';
import { EmployeeAddComponent } from './components/employee-add/employee-add.component';

const routes: Routes = [
  { path: 'list', component: EmployeesListComponent },
  { path: 'add', component: EmployeeAddComponent },
];

@NgModule({
  declarations: [EmployeesListComponent, EmployeeAddComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule],
})
export class EmployeesModule {}
