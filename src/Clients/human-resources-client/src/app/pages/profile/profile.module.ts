import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared';
import { ProfileDetailsComponent } from './components';

const routes: Routes = [{ path: '', component: ProfileDetailsComponent }];

@NgModule({
  declarations: [ProfileDetailsComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule],
})
export class ProfileModule {}
