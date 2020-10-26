import { Component, OnInit,Input,Output } from '@angular/core';
import * as _ from 'lodash';



  export var billingMaster = [
    {
      medicalBilling:"CT BRAIN",
      maxDiscount:100,
      modality:"CT",
      slotsPerDay:6,
      scanAmount:200
    },
    {
      medicalBilling:"MRI BRAIN",
      maxDiscount:300,
      modality:"MRI",
      slotsPerDay:6,
      scanAmount:170
    },
    {
      medicalBilling:"GLUCOSE FASTING",
      maxDiscount:10,
      modality:"LAB",
      slotsPerDay:9999999,
      scanAmount:250
    }
  ]


