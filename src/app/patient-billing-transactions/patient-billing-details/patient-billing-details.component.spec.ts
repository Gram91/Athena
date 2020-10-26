import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientBillingDetailsComponent } from './patient-billing-details.component';

describe('PatientBillingDetailsComponent', () => {
  let component: PatientBillingDetailsComponent;
  let fixture: ComponentFixture<PatientBillingDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientBillingDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientBillingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
