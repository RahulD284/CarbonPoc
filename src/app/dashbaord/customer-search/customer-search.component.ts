import { Component } from '@angular/core';

@Component({
  selector: 'app-customer-search',
  templateUrl: './customer-search.component.html',
  styleUrls: ['./customer-search.component.scss']
})
export class CustomerSearchComponent {
 public searchSuccess=false;
  constructor() {
  
}
  handleDataFromChild(data: any) {
    this.searchSuccess=data;
    console.log('Data received in parent:', this.searchSuccess);
}
}
