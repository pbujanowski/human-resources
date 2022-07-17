import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizationGuard } from './authorization';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home').then(m => m.HomeModule),
    canActivate: [AuthorizationGuard],
  },
  {
    path: 'employees',
    loadChildren: () =>
      import('./pages/employees').then(m => m.EmployeesModule),
    canActivate: [AuthorizationGuard],
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile').then(m => m.ProfileModule),
    canActivate: [AuthorizationGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
