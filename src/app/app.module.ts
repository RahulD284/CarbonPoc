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
import { CustomerSearchComponent } from './dashbaord/customer-search/customer-search.component';
import { BreadcrumbModule } from 'carbon-components-angular';
import { CustomerSerachResultComponent } from './dashbaord/customer-serach-result/customer-serach-result.component';
//import { Table } from 'carbon-components-angular/table';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashbaordComponent,
    CustomerSearchComponent,
    CustomerSerachResultComponent,
    HeaderComponent,
    FooterComponent
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
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
