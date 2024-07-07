import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';  
  
@Component({  
  selector: 'app-customer-search-form',  
  templateUrl: './customer-search-form.component.html',  
  styleUrls: ['./customer-search-form.component.scss']  
})  
export class CustomerSearchFormComponent implements OnInit {  
  customerSearchForm: FormGroup;  
  
  constructor(private fb: FormBuilder) {  
    this.customerSearchForm = this.fb.group({  
      submittedOption: [''],  
      custName: ['', [Validators.minLength(3), Validators.maxLength(30)]],  
      RadioGroupSearch: ['0'],  
      custId: ['', [Validators.maxLength(10)]],  
      regNo: ['', [Validators.pattern('^[0-9]{0,11}$')]],  
      custstatus: [''],  
      custclass: [''],  
      salesteam: [''],  
      relowner: [''],  
      CustomerTypeCode: ['']  
    });  
  }  
  
  ngOnInit(): void {  
    this.doInit();  
  }  
  
  doInit() {  
    // Initialization logic goes here  
    this.customerSearchForm.get('custName')?.setValue('');  
    this.customerSearchForm.get('salesteam')?.valueChanges.subscribe(value => {  
      this.disableRelationshipOwner(value);  
    });  
  }  
  
  disableRelationshipOwner(value: string) {  
    if (value !== 'SomeSalesTeamId') {  
      this.customerSearchForm.get('relowner')?.disable();  
    } else {  
      this.customerSearchForm.get('relowner')?.enable();  
    }  
  }  
  
  doPreSubmit(action: string): boolean {  
    this.customerSearchForm.get('submittedOption')?.setValue(action);  
    const atLeastOneSelected = this.buildCriteria();  
    if (!atLeastOneSelected) {  
      alert('Please select at least one search criteria.');  
      return false;  
    }  
    this.doSubmit(action);  
    return true;  
  }
  
  buildCriteria(): boolean {  
    // Implement your criteria building logic here  
    return true;  
  }  
  
  doSubmit(action: string) {  
    // Submit form logic  
    console.log('Form submitted with action:', action);  
  }  
  
  clearAll() {  
    this.customerSearchForm.reset();  
  }  
}  
