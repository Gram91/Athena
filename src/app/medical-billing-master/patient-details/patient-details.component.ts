import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit,ViewEncapsulation,Input,Output,EventEmitter, OnChanges,SimpleChanges,SimpleChange } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms'

import {SelectItem} from 'primeng/api';
@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PatientDetailsComponent implements OnInit,OnChanges {
patientDetailsForm:FormGroup;
selectedCode:SelectItem;
salutations:SelectItem[];
selectedAge:SelectItem;
addressLine2:any;
name:any;
country:SelectItem[];
selectedCountry:SelectItem;
dob:Date;
phoneNumber:any;
addressLine1:any;
appdate:Date;
gender:string;
years:SelectItem[];
currentValue:any;
ageType:any;
city:any;
state:any;
pin:any;
validationFailed=false;
@Input() saveData:any;
@Output() emitDataToSave: EventEmitter<any> = new EventEmitter();
@Output() patientBillErrors: EventEmitter<any> = new EventEmitter();
  constructor(private formBuilder:FormBuilder) { 
    
    this.patientDetailsForm = this.formBuilder.group({
      countryCode:['',Validators.required]
    });
    this.salutations = [
      {label:'Mr.', value:"mr"},
      {label:'Mrs.', value:"mrs"},
      {label:'Ms.', value:"ms"}
  ];

  this.years = [{label:"0",value:0},{label:"1",value:1},{label:"2",value:2},{label:"3",value:3},{label:"4",value:4}]
  
  }
  errorDescription:any;
countryCodes:any;

  ngOnInit() {

    this.countryCodes = [{label:'Country', value:'United States'},{label:'United States', value:'United States'},{label:'India', value:'India'}];
  }

  ngOnChanges(changes:SimpleChanges)
  {
    const saveData: SimpleChange = changes.saveData;
    if(typeof saveData!=='undefined')
    {
      this.currentValue = saveData.currentValue;
      if(this.currentValue)
      {
        this.ValidateData();
      }
    }
  }
  changeCountry(data)
  {

  }
  validateSalutationData(data)
  {
    console.log("selected salutation",data);

    if(data.value==="mr")
    {
      this.gender = "male;"

    }
    else{
      if(data.value === "mrs" || data.value==="ms")
      {
        this.gender = "female";
      }
      
    }
  }

  dateSelected(data)
  {
    var year = data.getFullYear();
    var currentYear = new Date().getFullYear();
    var age = currentYear - year;
    this.selectedAge={label:age.toString(),value:age};

    if(age<18)
    {
      this.ageType = "Child";
    }
    else if(age>18 && age<=60)
    {
      this.ageType = "Adult";
    }
    else if(age>60)
    {
      this.ageType = "Senior Citizen";
    }
  }

  ValidateData()
  {
    this.validationFailed = false;
    this.errorDescription="";
    // this.errorDescription = "<ul>";
    if(typeof this.selectedCode==='undefined' || this.selectedCode===null)    

   {
     this.validationFailed=true;
     this.errorDescription+="<li>" +"Salutation Cannot be empty"+"</li>";

   }

   if(typeof this.name==='undefined' || this.name===null)
   {
    this.validationFailed=true;
    this.errorDescription+="<li>" +"Name Cannot be empty"+"</li>";
  }
  if(this.gender===undefined || this.gender===null)
   {
    this.validationFailed=true;
    this.errorDescription+="<li>" +"Gender Cannot be empty"+"</li>";
  }
  if(this.dob===undefined && this.dob===null)
   {
    this.validationFailed=true;
    this.errorDescription+="<li>" +"DOB Cannot be empty"+"</li>";
  }
  if(this.ageType===undefined || this.ageType===null)
   {
    this.validationFailed=true;
    this.errorDescription+="<li>" +"Age Type Cannot be empty"+"</li>";
  }
  if(this.selectedAge===undefined || this.selectedAge===null)
   {
    this.validationFailed=true;
    this.errorDescription+="<li>" +"Age Cannot be empty"+"</li>";
  }
  if(this.appdate===undefined || this.appdate===null)
   {
    this.validationFailed=true;
    this.errorDescription+="<li>" +"Application Date Cannot be empty"+"</li>";
  }
  if(this.phoneNumber===undefined || this.phoneNumber===null)
   {
    this.validationFailed=true;
    this.errorDescription+="<li>" +"Phone number Cannot be empty"+"</li>";
  }
  if(this.addressLine1===undefined || this.addressLine1===null)
   {
    this.validationFailed=true;
    this.errorDescription+="<li>" +"Address Line 1 Cannot be empty"+"</li>";
  }
  if(this.addressLine2===undefined || this.addressLine2===null)
   {
    this.validationFailed=true;
    this.errorDescription+="<li>" +"Address Line 2 Cannot be empty"+"</li>";
  }
  if(this.city===undefined || this.city===null)
   {
    this.validationFailed=true;
    this.errorDescription+="<li>" +"City Cannot be empty"+"</li>";
  }
  if(this.state===undefined || this.state===null)
   {
    this.validationFailed=true;
    this.errorDescription+="<li>" +"State Cannot be empty"+"</li>";
  }
  if(this.pin===undefined || this.pin===null)
   {
    this.validationFailed=true;
    this.errorDescription+="<li>" +"Pin Cannot be empty"+"</li>";
  }
  if(this.selectedCountry===undefined || this.selectedCountry===null)
   {
    this.validationFailed=true;
    this.errorDescription+="<li>" +"Country Cannot be empty"+"</li>";
  }
  // this.errorDescription+="</ul>";
  //  else
  //  {
  //    this.validationFailed=true
  //  }

   if(!this.validationFailed)
   {

    var requestData = {
      salutation:this.selectedCode,
      name:this.name,
      gender:this.gender,
      dob:this.dob,
      ageType:this.ageType,
      age:this.selectedAge,
      appointmentDate:this.appdate,
      phoneNumber:this.phoneNumber,
      addressLine1:this.addressLine1,
      addressLine2:this.addressLine2,
      city:this.city,
      state:this.state,
      pin:this.pin,
      country:this.selectedCountry
  
  
    }
    this.emitDataToSave.emit(requestData);
    
   }
   else{
     this.patientBillErrors.emit(this.errorDescription);
   }

   
  }

  yearsChanged(data)
  {
    console.log("Data from years",data);
  }

}
