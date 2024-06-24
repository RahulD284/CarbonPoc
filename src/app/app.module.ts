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
<<<<<<< Updated upstream
=======
import { TableModule, PaginationModule } from 'carbon-components-angular';
import {CustomerSearchFormComponent} from './dashbaord/customer-search-form/customer-search-form.component';
import { AppTableComponent } from './app-table/app-table.component'
>>>>>>> Stashed changes

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashbaordComponent,
<<<<<<< Updated upstream
    CustomerSearchFormComponent
=======
    CustomerSearchComponent,
    CustomerSerachResultComponent,
    HeaderComponent,
    FooterComponent,
    CustomerSearchFormComponent,
    AppTableComponent
>>>>>>> Stashed changes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputModule, 
    ButtonModule,
    FormsModule,
    ReactiveFormsModule  ,
    GridModule,
    UIShellModule,
    IconModule,
    RadioModule,
<<<<<<< Updated upstream
    DropdownModule
=======
    DropdownModule,
    TableModule,
    PaginationModule
>>>>>>> Stashed changes
  ],
  exports: [AppTableComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
