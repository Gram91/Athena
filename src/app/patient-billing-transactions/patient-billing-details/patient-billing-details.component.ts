import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-patient-billing-details',
  templateUrl: './patient-billing-details.component.html',
  styleUrls: ['./patient-billing-details.component.css']
})
export class PatientBillingDetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }
 id:any;
  ngOnInit() {

    this.route.queryParams
      .subscribe(params => {
        console.log(params); // { order: "popular" }

        this.id = params.id;
        console.log(this.id); // popular
      }

);
  }

}
