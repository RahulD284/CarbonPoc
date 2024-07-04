import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(public router: Router) { }
  hasHamburger:boolean = false;

  expanded(e:any){
    console.log(e);
  }
  logout(){
    this.router.navigate(['/']);
    localStorage.clear();
  }
}
