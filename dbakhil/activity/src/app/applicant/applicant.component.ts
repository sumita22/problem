import { Component } from '@angular/core';

@Component({
  selector: 'app-applicant',
  templateUrl: './applicant.component.html',
  styleUrls: ['./applicant.component.css']
})
export class ApplicantComponent {
  applicantName:string="Akhita Akhil";

  jobsAvailable:boolean=true;
  
  onSubmitApplication(){
    alert("Submitting Application of "+this.applicantName);
  }
  
  // username:string="Akhita";
  // email:string="akhita2203@gmail.com";
  name: string = ''; 
}
