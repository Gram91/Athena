import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/api';
import {AppService} from '../../app.service';
import{Bill} from '../../bill';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-view-appointment-details',
  templateUrl: './view-appointment-details.component.html',
  styleUrls: ['./view-appointment-details.component.css']
})
export class ViewAppointmentDetailsComponent implements OnInit {
  fromDate:Date;
  toDate:Date;
  status:SelectItem[];
selectedStatus:SelectItem;
searchPattern:any;
appointmentData:any;
selectedId:any;
showTransactionData=false;
  constructor(private appService:AppService,private route: ActivatedRoute,
    private router: Router) { }
bills :Bill []=[]
  ngOnInit() {
    this.status = [
      {label:'partial', value:"Partially Paid"},
      {label:'full', value:"Fully Paid"},
      {label:'unpaid', value:"Unpaid"}
  ];
  // this.appointmentData = [{vin:12345,year:2012,brand:"Audi",color:"red"}];
  this.appService.getAll().subscribe((val: Bill[])=>{
    console.log(val);
    this.appointmentData  = val;
  })
  }

  searchData(event)
  {

  }

  routeTransaction(data)
  {
    this.showTransactionData = true
    this.selectedId = data.id;
    this.router.navigate(["/billing/patientBillingTransactions/transactions"],{ queryParams: { id: this.selectedId} })
    console.log("clicked");
  }

}
