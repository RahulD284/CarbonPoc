import { Component } from '@angular/core';
import graphOptions from '../../Shared/graph/graphOptions';
import graphData from '../../Shared/graph/graphData';
import graphRDOptions from '../../Shared/graph/graphOptionsRD';
import graphRDData from '../../Shared/graph/graphRD';

@Component({
  selector: 'app-portfolio-reports',
  templateUrl: './portfolio-reports.component.html',
  styleUrls: ['./portfolio-reports.component.scss']
})
export class PortfolioReportsComponent {
  options:any;
	data:any;
  
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
}
