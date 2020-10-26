import { Component, OnInit,Input,Output } from '@angular/core';
import * as _ from 'lodash';
import {AppService} from '../app.service';

import { ActivatedRoute,Router } from '@angular/router';

// import * as $ from 'jquery' 
@Component({
  selector: 'app-medical-billing-master',
  templateUrl: './medical-billing-master.component.html',
  styleUrls: ['./medical-billing-master.component.css']
})
export class MedicalBillingMasterComponent implements OnInit {

  constructor(private appService:AppService, private route: ActivatedRoute,
    private router: Router) { }
saveData = false;
requestData:any;
billErrors:any;
patientDetailErr:any
medicalErrors:any;
validationFailed=false;
  ngOnInit() {
    
  }
  saveBillData=false;
  saveMedicalData(data)
  {
   this.saveData = true;
   
  }

  savecurrentData(data)
  {
     this.requestData = data;
     this.saveBillData=true;
  }
  savecurrentBillData(data)
  {
   
    if(this.medicalErrors!==undefined && this.medicalErrors!==null && this.medicalErrors!=="" )
    {
      this.validationFailed = true;
    if(!this.medicalErrors.includes("</ul>"))
    {
     this.medicalErrors+="</ul>";
    }
  }
  else
  {
    //_.merge(this.requestData,{"billingData":data});
    //$.extend(this.requestData,{c:data});
    var billresponse = this.appService.getAll();
    // Object.assign({id:1},this.requestData);
    // Object.assign(this.requestData,{"billingData":data});
    for(let i=0;i<data.length;i++)
    {
      Object.assign({id:1},this.requestData);
      Object.assign(this.requestData,{"billingData":data[i]});
      this.appService.create(this.requestData).subscribe();
      this.router.navigate(["/billing/patientBillingTransactions"]);

    }

    console.log(this.requestData);

    //this.appService.create(this.requestData).subscribe();
  }
  }

  failedToSave(data)
  {
    this.saveData = false;
  }

  billErrorList(data)
  {
    if(this.medicalErrors===undefined || this.medicalErrors===null)
    {
      this.medicalErrors="<ul>";
    }
    this.medicalErrors += data;
    this.saveData = false;
    if(!this.medicalErrors.includes("</ul>"))
     {
      this.medicalErrors+="</ul>";
     }
     this.validationFailed = true;
  }

  patientDetailErrors(data)
  {
    if(this.medicalErrors===undefined || this.medicalErrors===null)
    {
      this.medicalErrors="<ul>";
    }
     this.medicalErrors += data;
     this.saveData = false;
    //  if(!this.medicalErrors.includes("</ul>"))
    //  {
    //   this.medicalErrors+="</ul>";
    //  }
     //this.validationFailed = true;
     this.saveBillData=true;
  }

}
