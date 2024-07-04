import { Component } from '@angular/core';
import { Router } from '@angular/router';
import graphOptions from '../Shared/graph/graphOptions';
import graphData from '../Shared/graph/graphData';
import graphRDOptions from '../Shared/graph/graphOptionsRD';
import graphRDData from '../Shared/graph/graphRD';

@Component({
  selector: 'app-dashbaord',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashbaord.component.scss']
})
export class DashbaordComponent {
  options:any;
	data:any;
  constructor(public router:Router){}

  ngOnInit() {
    if(localStorage.getItem('RD') == "RDUser") {
      console.log("This is RD User");
      this.options = graphRDOptions;
      this.data = graphRDData;
    }
    else {
      this.options = graphOptions;
      this.data = graphData;
    }
  }

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
