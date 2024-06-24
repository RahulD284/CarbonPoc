import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSerachResultComponent } from './customer-serach-result.component';

describe('CustomerSerachResultComponent', () => {
  let component: CustomerSerachResultComponent;
  let fixture: ComponentFixture<CustomerSerachResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerSerachResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerSerachResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
