import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components';
import { MaterialModule } from 'src/app/material';
import { AppEventModule } from 'src/app/app-event';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard' },
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    AppEventModule,
  ],
  exports: [RouterModule],
})
export class HomeModule {}
