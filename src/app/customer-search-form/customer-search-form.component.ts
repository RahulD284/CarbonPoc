import { Component } from '@angular/core';
import { ListItem } from 'carbon-components-angular';

@Component({
  selector: 'app-customer-search-form',
  templateUrl: './customer-search-form.component.html',
  styleUrls: ['./customer-search-form.component.scss']
})
export class CustomerSearchFormComponent {
  dropdownItems: ListItem[] = [
    { content: 'Option 1', selected: false },
    { content: 'Option 2', selected: false },
    { content: 'Option 3', selected: false }
  ];
}
