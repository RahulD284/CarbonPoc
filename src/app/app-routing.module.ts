import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashbaordComponent } from './dashbaord/dashbaord.component';
//import {CustomerSearchComponent} from './dashbaord/customer-search/customer-search.component'
//import { CustomerSerachResultComponent } from './dashbaord/customer-serach-result/customer-serach-result.component';
import { SearchFormComponent } from './dashbaord/search-form/search-form.component';
import { SearchResultsComponent } from './dashbaord/search-results/search-results.component';
import { InboxComponent } from './dashbaord/inbox/inbox.component';
import { DairyComponent } from './dashbaord/dairy/dairy.component';
import { LimitManagementComponent } from './dashbaord/limit-management/limit-management.component';
import { PortfolioReportsComponent } from './dashbaord/portfolio-reports/portfolio-reports.component';
import { CustomerSearchFormComponent } from './customer-search-form-GenAI/customer-search-form.component';

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
    path:'customerSearchResult',
    component: SearchResultsComponent
  },
  {
    path:'customerSearchForm',
    component: SearchFormComponent
  },
  {
    path:'inbox',
    component: InboxComponent
  },
  {
    path:'diary',
    component: DairyComponent
  },
  {
    path:'limitManagement',
    component: LimitManagementComponent
  },
  {
    path:'portfolioReports',
    component: PortfolioReportsComponent
  },
  {
    path:'customerSearchGenAI',
    component: CustomerSearchFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
