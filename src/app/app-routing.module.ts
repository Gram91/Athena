import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'; 
import{MedicalBillingMasterComponent} from './medical-billing-master/medical-billing-master.component';
import{PatientBillingTransactionsComponent} from './patient-billing-transactions/patient-billing-transactions.component';
import{PatientBillingDetailsComponent} from './patient-billing-transactions/patient-billing-details/patient-billing-details.component'

 const routes: Routes = [{ path: 'billing/medicalMaster', component: MedicalBillingMasterComponent },
{ path: 'billing/patientBillingTransactions', component: PatientBillingTransactionsComponent },
{ path: 'billing/patientBillingTransactions/transactions', component: PatientBillingDetailsComponent }];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
