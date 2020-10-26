import { Component, OnInit,Input,Output,EventEmitter, OnChanges,SimpleChanges,SimpleChange } from '@angular/core';
import {AppService} from '../../../../app.service';
import{Bill} from '../../../../bill';

@Component({
  selector: 'app-previous-transaction-details',
  templateUrl: './previous-transaction-details.component.html',
  styleUrls: ['./previous-transaction-details.component.css']
})
export class PreviousTransactionDetailsComponent implements OnInit,OnChanges {
  transactions=[];
  constructor(private appService: AppService) { }
  previousTransactions:any;
  @Input() updateTransaction: any;
  @Input() id:any;
  @Output() retrieveDone: EventEmitter<any> = new EventEmitter();
  currentValue:any;
  ngOnInit() {
    var idTemp=2;
    this.appService.getById(this.id).subscribe((val: Bill)=>{
      console.log(val);
      this.transactions =  val.previousTransactions;
    })

    
  }

  ngOnChanges(changes:SimpleChanges)
  {
    const saveData: SimpleChange = changes.updateTransaction;
    if(typeof saveData!=='undefined')
    {
      this.currentValue = saveData.currentValue;
      if(this.currentValue)
      {
        this.updateData(this.id);
      }
    }
  }

  updateData(data)
  {
    this.appService.getById(this.id).subscribe((val: Bill)=>{
      console.log(val);
      this.transactions =  val.previousTransactions;
      this.retrieveDone.emit(true);
    })
  }
 

}
