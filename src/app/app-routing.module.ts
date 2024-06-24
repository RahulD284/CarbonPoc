import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashbaordComponent } from './dashbaord/dashbaord.component';
<<<<<<< Updated upstream
=======
import {CustomerSearchComponent} from './dashbaord/customer-search/customer-search.component'
import { AppComponent } from './app.component';
>>>>>>> Stashed changes

const routes: Routes = [
  {
    path:'',
    component: AppComponent
  },
  {
    path:'dashboard',
    component: DashbaordComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
