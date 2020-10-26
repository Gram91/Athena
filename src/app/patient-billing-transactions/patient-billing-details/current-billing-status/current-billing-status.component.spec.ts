import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentBillingStatusComponent } from './current-billing-status.component';

describe('CurrentBillingStatusComponent', () => {
  let component: CurrentBillingStatusComponent;
  let fixture: ComponentFixture<CurrentBillingStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentBillingStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentBillingStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
