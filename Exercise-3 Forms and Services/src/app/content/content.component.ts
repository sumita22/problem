import { Component, OnInit } from '@angular/core';

import { SupportService } from '../support.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent{
  

  profile: any[]=[]

  constructor(private support:SupportService){
    this.profile=this.support.getUserDetails()
  }
  

  // ngOnInit(){
  //   this.support.profile$.subscribe((profile) =>{
  //     console.log(profile);
  //     this.profile = profile;
  //   });
  // }



  // profile:Profile={
  //   name:"Akhita",
  //   job_title: "Software Developer",
  //   email:"akhita@gmail.com",
  //   ph:9876543210,
  //   loc: "Palakkad",
  // }

}
