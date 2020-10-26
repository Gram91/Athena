import { SelectItem } from "primeng/api";

export interface Bill
{
    id:number;
    salutation:String;
    name:String;
    gender:String;
    dob:Date;
    ageType:String;
    age:SelectItem;
    appointmentDate:Date;
    phoneNumber:number;
    addressLine1:String;
    addressLine2:String;
    state:String;
    city:String;
    pin:String;
    country:String;
    billingData:any;
    previousTransactions:any;
}