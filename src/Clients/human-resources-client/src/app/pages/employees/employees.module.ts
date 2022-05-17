import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { EmployeesListComponent } from './components';

const routes: Routes = [{ path: '', component: EmployeesListComponent }];

@NgModule({
  declarations: [EmployeesListComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeesModule {}
