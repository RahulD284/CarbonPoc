import { Component } from '@angular/core';
import { TableModel } from 'carbon-components-angular';

@Component({
  selector: 'app-customer-serach-result',
  templateUrl: './customer-serach-result.component.html',
  styleUrls: ['./customer-serach-result.component.scss']
})
export class CustomerSerachResultComponent {

  title="Customer Search results for “Abhi”"
  description="Click on any of the “Customer Name” to open the respective record."
  model = new TableModel();
  selectPage(page:any) {
    // ... your code to load the page goes here

    this.model.currentPage = page;

    // ... anything you want to do after page selection changes goes here
}
}
