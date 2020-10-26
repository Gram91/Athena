import { Component, OnInit,Input, OnChanges,SimpleChanges,SimpleChange } from '@angular/core';
import { e } from '@angular/core/src/render3';
import {SelectItem} from 'primeng/api';
import {AppService} from '../../../app.service';
import{Bill} from '../../../bill';
@Component({
  selector: 'app-current-billing-status',
  templateUrl: './current-billing-status.component.html',
  styleUrls: ['./current-billing-status.component.css']
})
export class CurrentBillingStatusComponent implements OnInit {
  amountPayable:any;
  constructor(private appService:AppService) { }
  billingStatus:any;
  selectedMode:SelectItem;
  paymentMode:SelectItem[];
  cardData:any;
  name:any;
  currentId:any;
  updateTransaction = false;
  cvv:any;
  recordData:any;
  expiryDate:Date;
  @Input() id:any;
  notifyUser = false;
  ngOnInit() {
    //this.billingStatus = [{vin:12345,year:2012,brand:"Audi",color:"red"}];
    this.paymentMode = [
      {label:'Net Banking', value:"banking"},
      {label:'Card', value:"card"}
  ];
  this.currentId =this.id;
  //var idTemp=2;
    this.appService.getById(this.id).subscribe((val: Bill)=>{
      console.log(val);
      this.recordData = val;
      this.billingStatus  = val;
    })
  }

  // ngOnChanges(changes:SimpleChanges)
  // {
  //   const id: SimpleChange = changes.id;
  //   if(typeof id!=='undefined' && id!==null)
  //   {
  //     this.getSingleRecordBasedOnID(id);
  //   }
  // }

  getSingleRecordBasedOnID(id)
  {
    var idTemp=2;
    this.appService.getById(idTemp).subscribe((val: Bill)=>{
      console.log(val);
      this.billingStatus  = val;
    })
  }

  saveData(data)
  {
    var id;
    if(this.recordData.previousTransactions!==undefined && this.recordData.previousTransactions!==null)
    {
    id=(this.recordData.previousTransactions.length)+1;
    }
    else
    {
     id =1;
    }
    var transactionReqData = 
    {
      id:id,
      amount: this.amountPayable,
      paymentMode:this.selectedMode,
      paymentDate:new Date()

    }
    

    if(typeof this.recordData.previousTransactions!=='undefined' && this.recordData.previousTransactions!==null)
    {
      if(this.recordData.previousTransactions.length===2)
      {
        if(this.amountPayable===this.recordData.billingData.totalAmount)
        {
          this.notifyUser =false;
         // this.recordData.billingData.totalAmount = this.recordData.billingData.totalAmount-this.amountPayable;
          this.recordData.previousTransactions.push(transactionReqData);
        }
        else{
          this.notifyUser = true;
          
        }
      }
      else{
        this.recordData.previousTransactions.push(transactionReqData);
      }
      
      
    }
    else
    {
      var transData = [];
      transData.push(transactionReqData);
      Object.assign(this.recordData,{"previousTransactions":transData});
    }
    if(!this.notifyUser)
    {
      this.recordData.billingData.totalAmount = this.recordData.billingData.totalAmount-this.amountPayable;
      this.appService.update(this.recordData.id,this.recordData).subscribe((val: Bill)=>{
        console.log(val);
        this.updateTransaction = true;
        
        
      })
    }
    
  }
  resetData(data)
  {
    if(data)
    {
      this.updateTransaction = false;
    }
  }

}
