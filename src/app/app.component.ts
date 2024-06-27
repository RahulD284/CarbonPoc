import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'carbonPoc'; 
  showHeaderFooter:boolean = false;


  constructor(private fb: FormBuilder,public router: Router) { }

  ngOnInit(): void {
    this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
   
}
}