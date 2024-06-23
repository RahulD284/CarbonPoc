import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ListItem } from 'carbon-components-angular';

@Component({
  selector: 'app-customer-search-form',
  templateUrl: './customer-search-form.component.html',
  styleUrls: ['./customer-search-form.component.scss']
})
export class CustomerSearchFormComponent {
  @Output() dataEvent = new EventEmitter<any>();
  dropdownItems: ListItem[] = [
    { content: 'Option 1', selected: false },
    { content: 'Option 2', selected: false },
    { content: 'Option 3', selected: false }
  ];
  constructor(public router:Router){}
  

  serachSuccess=false;

  submitSearch(){
    this.serachSuccess=true;
  
    this.dataEvent.emit(this.serachSuccess);
  }
}
