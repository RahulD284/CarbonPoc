import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashbaordComponent } from './dashbaord/dashbaord.component';
//import {CustomerSearchComponent} from './dashbaord/customer-search/customer-search.component'
import { TableComponent } from './Shared/table/table.component';
//import { CustomerSerachResultComponent } from './dashbaord/customer-serach-result/customer-serach-result.component';
import { SearchFormComponent } from './dashbaord/search-form/search-form.component';
import { SearchResultsComponent } from './dashbaord/search-results/search-results.component';
import { InboxComponent } from './dashbaord/inbox/inbox.component';
import { DairyComponent } from './dashbaord/dairy/dairy.component';
import { LimitManagementComponent } from './dashbaord/limit-management/limit-management.component';
import { PortfolioReportsComponent } from './dashbaord/portfolio-reports/portfolio-reports.component';

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
    path:'app-table',
    component: TableComponent
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
