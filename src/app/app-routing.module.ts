import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashbaordComponent } from './dashbaord/dashbaord.component';
import {CustomerSearchComponent} from './dashbaord/customer-search/customer-search.component'
import { TableComponent } from './Shared/table/table.component';
import { CustomerSerachResultComponent } from './dashbaord/customer-serach-result/customer-serach-result.component';

const routes: Routes = [
  {
    path:'',
    component: LoginComponent
  },
  {
    path:'dashboard',
    component: DashbaordComponent
  },
  {
    path:'customerSearch',
    component: CustomerSearchComponent
  },
  {
    path:'app-table',
    component: TableComponent
  },
  {
    path:'result',
    component: CustomerSerachResultComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
