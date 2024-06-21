import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'carbonPoc'; 
  condensed:boolean = true;
  fullWidth:boolean = true;
  narrow:boolean = true;


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
   
}
}