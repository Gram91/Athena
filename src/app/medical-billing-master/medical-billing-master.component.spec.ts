import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalBillingMasterComponent } from './medical-billing-master.component';

describe('MedicalBillingMasterComponent', () => {
  let component: MedicalBillingMasterComponent;
  let fixture: ComponentFixture<MedicalBillingMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalBillingMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalBillingMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
