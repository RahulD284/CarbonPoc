import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  constructor(public router: Router) { }

  login() {
    if(this.username == 'RD') {
      this.router.navigate(['/dashboard']);
      localStorage.setItem('RD','RDUser')
    }
    else {
      localStorage.setItem('RM','RMUser')
      this.router.navigate(['/dashboard']);
    }
   // this.router.navigate(['/dashboard']);
  }
  onSubmit() {
    console.log('Username:', this.username);
    console.log('Password:', this.password);
  }
}
