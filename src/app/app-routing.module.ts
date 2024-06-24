import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashbaordComponent } from './dashbaord/dashbaord.component';
import {CustomerSearchComponent} from './dashbaord/customer-search/customer-search.component'
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path:'',
    component: AppComponent
  },
  {
    path:'dashboard',
    component: DashbaordComponent
  },
  {
    path:'customerSearch',
    component: CustomerSearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
