import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputModule, ButtonModule } from 'carbon-components-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GridModule } from 'carbon-components-angular';
import { LoginComponent } from './login/login.component';
import { DashbaordComponent } from './dashbaord/dashbaord.component';
import { UIShellModule } from 'carbon-components-angular';
import { IconModule } from 'carbon-components-angular';
import { CustomerSearchFormComponent } from './customer-search-form/customer-search-form.component';
import { RadioModule } from 'carbon-components-angular';
import { DropdownModule } from 'carbon-components-angular';
import { TableModule, PaginationModule } from 'carbon-components-angular';
import { AppTableComponent } from './app-table/app-table.component'
import { CustomerSearchComponent } from './dashbaord/customer-search/customer-search.component';
import { BreadcrumbModule } from 'carbon-components-angular';
import { CustomerSerachResultComponent } from './dashbaord/customer-serach-result/customer-serach-result.component';
//import { Table } from 'carbon-components-angular/table';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
//import { AddAlt20Module } from '@carbon/icons-angular';
import { SearchModule } from 'carbon-components-angular';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashbaordComponent,
    CustomerSearchFormComponent,
    CustomerSearchComponent,
    CustomerSerachResultComponent,
    HeaderComponent,
    FooterComponent,
    CustomerSearchFormComponent,
    AppTableComponent,
    CustomerSearchFormComponent,
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
    RadioModule,
    DropdownModule,
    TableModule,
    PaginationModule,
    BreadcrumbModule,
    SearchModule,
    RadioModule,
    DropdownModule,
    HttpClientModule
  ],
  exports: [AppTableComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
