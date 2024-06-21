import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashbaord',
  templateUrl: './dashbaord.component.html',
  styleUrls: ['./dashbaord.component.scss']
})
export class DashbaordComponent {
  constructor(public router:Router){}

  logout(){
    this.router.navigate(['/']);
  }
}
