import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  InputModule, ButtonModule,
  TableModule, PaginationModule
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
import { CustomerSearchFormComponent } from './dashbaord/customer-search-form/customer-search-form.component';
import { TableComponent } from './Shared/table/table.component'
import { HttpClientModule } from '@angular/common/http';
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
    TableComponent
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
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
