import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from './authentication';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthenticationGuard],
    loadChildren: () => import('./pages/home').then(m => m.HomeModule),
  },
  {
    path: 'employees',
    canActivate: [AuthenticationGuard],
    loadChildren: () =>
      import('./pages/employees').then(m => m.EmployeesModule),
  },
  {
    path: 'profile',
    canActivate: [AuthenticationGuard],
    loadChildren: () => import('./pages/profile').then(m => m.ProfileModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
