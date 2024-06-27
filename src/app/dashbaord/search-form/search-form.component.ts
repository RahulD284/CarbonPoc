import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ListItem } from 'carbon-components-angular';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent {
  dropdownItems: ListItem[] = [
    { content: 'Option 1', selected: false },
    { content: 'Option 2', selected: false },
    { content: 'Option 3', selected: false }
  ];
  constructor(public router:Router){}
  submitSearch(){
    this.router.navigate(['/customerSearchResult']);
  }

  logout() {
    this.router.navigate(['/dashboard']);
  }
}
