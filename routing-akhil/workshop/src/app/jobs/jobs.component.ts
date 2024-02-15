import { Component } from '@angular/core';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent {
  jobs:any=
  [
    {
      companyLogo:"../../assets/images/Rectangle 14.png",
      job_post: "UX/UI Designer",
      company_name: "Shopee ",
      location: "Indonasia",
    },
    {
      companyLogo:"../../assets/images/Rectangle 14 (1).png",
      job_post: "Product Designer",
      company_name: "Amazon",
      location: "Indonesia",
    },
    {
      companyLogo:"../../assets/images/Rectangle 14 (2).png",
      job_post: "UX Designer",
      company_name: "Ebay",
      location: "San Francisco",
    }
    
  ]
 
}


