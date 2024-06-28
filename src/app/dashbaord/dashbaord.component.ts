import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashbaord',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashbaord.component.scss']
})
export class DashbaordComponent {
  constructor(public router:Router){}

  logout(){
    this.router.navigate(['/']);
  }
  customerSearch(){
    this.router.navigate(['/customerSearchForm']);
  }
  goToInbox() {
    this.router.navigate(['/inbox']);
  }
  goToDairy() {
    this.router.navigate(['/diary']);
  }
  goTolimit() {
    this.router.navigate(['/limitManagement']);
  }
  goToPortfolio() {
    this.router.navigate(['/portfolioReports']);
  }
}
