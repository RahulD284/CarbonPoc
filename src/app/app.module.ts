import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  InputModule, ButtonModule,
  TableModule, PaginationModule, IconService, ThemeModule
} from 'carbon-components-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GridModule } from 'carbon-components-angular';
import { LoginComponent } from './login/login.component';
import { DashbaordComponent } from './dashbaord/dashbaord.component';
import { UIShellModule } from 'carbon-components-angular';
import { IconModule } from 'carbon-components-angular';
import { CustomerSearchComponent } from './dashbaord/customer-search/customer-search.component';
import { BreadcrumbModule } from 'carbon-components-angular';
import { CustomerSerachResultComponent } from './dashbaord/customer-serach-result/customer-serach-result.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SearchModule } from 'carbon-components-angular';
import { RadioModule } from 'carbon-components-angular';
import { DropdownModule } from 'carbon-components-angular';
import UserAvatar20 from '@carbon/icons/es/user--avatar/20';
import Reset20 from '@carbon/icons/es/reset/20';
import Close20 from '@carbon/icons/es/close/20';
import ArrowRight20 from '@carbon/icons/es/arrow--right/20';
import Information20 from '@carbon/icons/es/information/20';
import PinFilled20 from '@carbon/icons/es/pin--filled/20';
import Draggable20 from '@carbon/icons/es/draggable/20';
import User20 from '@carbon/icons/es/user/20';
import Home20 from '@carbon/icons/es/home/20';
import Email20 from '@carbon/icons/es/email--new/20';
import Settings20 from '@carbon/icons/es/settings/20';
import Notification20 from '@carbon/icons/es/notification/20';
import {CustomerSearchFormComponent} from './dashbaord/customer-search-form/customer-search-form.component'
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from './Shared/table/table.component';
import { SearchFormComponent } from './dashbaord/search-form/search-form.component';
import { SearchResultsComponent } from './dashbaord/search-results/search-results.component';
import { InboxComponent } from './dashbaord/inbox/inbox.component';
import { LimitManagementComponent } from './dashbaord/limit-management/limit-management.component';
import { DairyComponent } from './dashbaord/dairy/dairy.component';
import { PortfolioReportsComponent } from './dashbaord/portfolio-reports/portfolio-reports.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashbaordComponent,
    CustomerSearchComponent,
    CustomerSerachResultComponent,
    HeaderComponent,
    FooterComponent,
    CustomerSearchFormComponent,
    TableComponent,
    SearchFormComponent,
    SearchResultsComponent,
    InboxComponent,
    LimitManagementComponent,
    DairyComponent,
    PortfolioReportsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputModule, 
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    GridModule,
    UIShellModule,
    IconModule,
    BreadcrumbModule,
    SearchModule,
    RadioModule,
    DropdownModule,
    TableModule,
    PaginationModule,
    HttpClientModule,
    ThemeModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(public iconService: IconService){
    this.iconService.registerAll([Notification20,Email20,Home20,Settings20,UserAvatar20, Reset20, Close20, ArrowRight20, Information20, PinFilled20, Draggable20, User20]);
  }
}
