import { Component } from '@angular/core';
import graphOptions from '../../Shared/graph/graphOptions';
import graphData from '../../Shared/graph/graphData';
import graphRDOptions from '../../Shared/graph/graphOptionsRD';
import graphRDData from '../../Shared/graph/graphRD';

//Credit application data import
import creditApplicationsData from '../../Shared/graph/creditApplicationsData';
import creditapplicationOptions from '../../Shared/graph/creditapplicationOptions';

//last month credit application data import
import lastMonthCreditAppOption from '../../Shared/graph/lastMonthCreditAppOption';
import lastMonthCreditAppStatus from 'src/app/Shared/graph/lastMonthCreditAppStatus';

//Application Review Data import
import applicationReviewData from '../../Shared/graph/applicationReviewData';
import applicationreviewOption from 'src/app/Shared/graph/applicationreviewOption';

//Currrent Month Application Review Data import
import currentMonthApplicationReviewdata from '../../Shared/graph/currentMonthApplicationReviewdata';
import currentMonthApplicationOptions from 'src/app/Shared/graph/currentMonthApplicationOptions';

@Component({
  selector: 'app-portfolio-reports',
  templateUrl: './portfolio-reports.component.html',
  styleUrls: ['./portfolio-reports.component.scss']
})
export class PortfolioReportsComponent {
  options:any;
	data:any;

  creditdata:any;
  creditOptions:any;

  lastMonthData:any;
  lastMonthOption:any;

  applicationReviewData:any;
  applicationReviewOption:any;

  CurrentMonthReviewData:any;
  CurrentMonthReviewOption:any;
  
  ngOnInit() {
    this.creditOptions=creditapplicationOptions;
    this.creditdata=creditApplicationsData;
    this.lastMonthData=lastMonthCreditAppStatus;
    this.lastMonthOption=lastMonthCreditAppOption;
    this.applicationReviewData=applicationReviewData;
    this.applicationReviewOption=applicationreviewOption;
    this.CurrentMonthReviewData=currentMonthApplicationReviewdata;
    this.CurrentMonthReviewOption=currentMonthApplicationOptions;
    
  
  }
}
