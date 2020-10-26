import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientBillingTransactionsComponent } from './patient-billing-transactions.component';

describe('PatientBillingTransactionsComponent', () => {
  let component: PatientBillingTransactionsComponent;
  let fixture: ComponentFixture<PatientBillingTransactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientBillingTransactionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientBillingTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
