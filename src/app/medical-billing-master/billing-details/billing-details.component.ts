import { Component, OnInit,Input,Output,EventEmitter, OnChanges,SimpleChanges,SimpleChange } from '@angular/core';
import{billingMaster} from '../../data'
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-billing-details',
  templateUrl: './billing-details.component.html',
  styleUrls: ['./billing-details.component.css']
})
export class BillingDetailsComponent implements OnInit,OnChanges {
  billData=[];
  resultData:any
  billResult:any;
  constructor() { }
  discount:any;
  scanList:any;
  scanAmount:any;
  currentValue=false;
  billRequest:any;
  //saveMedicalData:any;
  billingList=[];
  @Input() saveBillData:any;
  @Output() emitDataToSave: EventEmitter<any> = new EventEmitter();
  @Output() medicalBillErrors: EventEmitter<any> = new EventEmitter();
  results=[];
  ngOnInit() {
    //this.billData = [{vin:12345,year:2012,brand:"Audi",color:"red"}]
    for(let i=0;i<billingMaster.length;i++)
    {
      this.billData.push(billingMaster[i].medicalBilling);
    }
  }

  

  addData(data){

    if(this.discount>0 && this.discount<=this.billResult[0].maxDiscount)
    {
      
      
      
      

      
      var totalAmount;
      if(this.billResult[0].modality==="LAB")
      {
        totalAmount = this.billResult[0].scanAmount -((this.billResult[0].scanAmount*this.discount)/100);
      }
      else
      {
        totalAmount = this.billResult[0].scanAmount - this.discount
      }

      var record = 
      {
        sno:this.billingList.length+1,
        scanName:this.billResult[0].medicalBilling,
        scanAmount:this.billResult[0].scanAmount,
        discount:this.discount,
        totalAmount:totalAmount,
        modality:this.billResult[0].modality
      }

      if(this.billResult[0].modality==="CT")
      {
        var ctCheck = this.billingList.filter(b=>b.modality==="CT");

        if(ctCheck.length===7)
        {
          
        }
        else
        {
          this.billingList.push(record);
        }
      }
      else
      if(this.billResult[0].modality==="MRI")
      {
        var mriCheck = this.billingList.filter(b=>b.modality==="MRI");

        if(mriCheck.length===6)
        {
          
        }
        else
        {
          this.billingList.push(record);
        }
      }
      else
      {
        this.billingList.push(record);
      }

      
    }

  }

  ngOnChanges(changes:SimpleChanges)
  {
    const saveData: SimpleChange = changes.saveBillData;
    if(typeof saveData!=='undefined')
    {
      this.currentValue = saveData.currentValue;
      if(this.currentValue)
      {
        this.ValidateData();
      }
    }
  }

  saveAllData(data)
  {
    
  }
  ValidateData()
  {

    if(this.billingList.length>0)
    {
     this.emitDataToSave.emit(this.billingList);
    }
    else
    {
      var error = "<li>"+"Atleast one medical bill record should be present"+"</li>"
      this.medicalBillErrors.emit(error);
    }
  }

  search(event)
  {
    this.resultData = this.billData.filter(b=> b.startsWith(event.query));
    this.results = this.resultData;
    this.billResult = billingMaster.filter(b=> b.medicalBilling===this.results[0])
  }

  retrieveData(data)
  {
    this.scanAmount = this.billResult[0].scanAmount;
  }

}
