import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DropdownModule} from 'primeng/dropdown';
import { AppComponent } from './app.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { MedicalBillingMasterComponent } from './medical-billing-master/medical-billing-master.component';
import { PatientDetailsComponent } from './medical-billing-master/patient-details/patient-details.component';
import {InputTextModule} from 'primeng/inputtext';
import {RadioButtonModule} from 'primeng/radiobutton';
import {CalendarModule} from 'primeng/calendar';
import { BillingDetailsComponent } from './medical-billing-master/billing-details/billing-details.component';
import {TableModule} from 'primeng/table';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {ButtonModule} from 'primeng/button';
import { PatientBillingTransactionsComponent } from './patient-billing-transactions/patient-billing-transactions.component';
import { ViewAppointmentDetailsComponent } from './patient-billing-transactions/view-appointment-details/view-appointment-details.component';
import { PatientBillingDetailsComponent } from './patient-billing-transactions/patient-billing-details/patient-billing-details.component';
import { CurrentBillingStatusComponent } from './patient-billing-transactions/patient-billing-details/current-billing-status/current-billing-status.component';
import { PreviousTransactionDetailsComponent } from './patient-billing-transactions/patient-billing-details/current-billing-status/previous-transaction-details/previous-transaction-details.component';
import {PasswordModule} from 'primeng/password';
import {DialogModule} from 'primeng/dialog';
import { HttpClientModule } from '@angular/common/http';
import{AppService} from'./app.service';
import { AppRoutingModule } from './app-routing.module'; // CLI imports AppRoutingModule





@NgModule({
  declarations: [
    AppComponent,
    MedicalBillingMasterComponent,
    PatientDetailsComponent,
    BillingDetailsComponent,
    PatientBillingTransactionsComponent,
    ViewAppointmentDetailsComponent,
    PatientBillingDetailsComponent,
    CurrentBillingStatusComponent,
    PreviousTransactionDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    RadioButtonModule,
    CalendarModule,
    TableModule,
    AutoCompleteModule,
    ButtonModule,
    PasswordModule,
    DialogModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
