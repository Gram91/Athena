import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousTransactionDetailsComponent } from './previous-transaction-details.component';

describe('PreviousTransactionDetailsComponent', () => {
  let component: PreviousTransactionDetailsComponent;
  let fixture: ComponentFixture<PreviousTransactionDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviousTransactionDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousTransactionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
