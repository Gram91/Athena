import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DropdownModule} from 'primeng/dropdown';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import {InputTextModule} from 'primeng/inputtext';
import {RadioButtonModule} from 'primeng/radiobutton';
import {CalendarModule} from 'primeng/calendar';

import { CurrentBillingStatusComponent } from './patient-billing-details/current-billing-status/current-billing-status.component';
@NgModule({
  imports: [
    CommonModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    RadioButtonModule,
    CalendarModule
  ],
  declarations: [CurrentBillingStatusComponent]
})
export class PatientBillingTransactionsModule { }
