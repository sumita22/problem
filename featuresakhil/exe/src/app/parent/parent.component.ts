import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  details=[
  {jobtitle:"Quality Tester",
  company:"Ebay",
location:"Nepal",
locationimg:'../../assets/images/location.gif',
logo:"../../assets/images/ebay.png",
backdrop:"../../assets/images/ebay2.jpg",
type:"Fulltime",
typeimg:'../../assets/images/clock.gif',
salary:"50000",
salaryimg: '../../assets/images/money.gif' ,
site:"Onsite",
siteimg: '../../assets/images/onsite.gif',
description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
applicants:"12 Applicants",
posted:"Posted 6 days ago",
bookmark:"../../assets/images/bookmark.gif",
experience:"Mid-level",
experienceimg:'../../assets/images/suitcase.gif'},


{jobtitle:'Product Designer',
  company:'Amazon',
location:'India',
locationimg:'../../assets/images/location.gif',
logo:'../../assets/images/social.png',
backdrop:'../../assets/images/amazon2.jpg',
type:'Fulltime',
typeimg:'../../assets/images/clock.gif',
salary:'15000',
salaryimg: '../../assets/images/money.gif' ,
site:'Onsite',
siteimg: '../../assets/images/onsite.gif',
description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
applicants:'7 Applicants',
posted:'Posted 16 days ago',
bookmark:'../../assets/images/bookmark.gif',
experience:'High-level',
experienceimg:'../../assets/images/suitcase.gif'},

{jobtitle:'UI Designer',
  company:'Google',
location:'USA',
locationimg:'../../assets/images/location.gif',
logo:'../../assets/images/search.png',
backdrop:'../../assets/images/google2.jpg',
type:'Part-time',
typeimg:'../../assets/images/clock.gif',
salary:'50000',
salaryimg: '../../assets/images/money.gif' ,
site:'Onsite',
siteimg: '../../assets/images/onsite.gif',
description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
applicants:'20 Applicants',
posted:'Posted 4 days ago',
bookmark:'../../assets/images/bookmark.gif',
experience:'High-level',
experienceimg:'../../assets/images/suitcase.gif'},

{jobtitle:'Guest Service Associate',
  company:'Nike',
location:'Texas',
locationimg:'../../assets/images/location.gif',
logo:'../../assets/images/nike0.jpg',
backdrop:'../../assets/images/nike3.png',
type:'Part-time',
typeimg:'../../assets/images/clock.gif',
salary:'70000',
salaryimg: '../../assets/images/money.gif' ,
site:'Remote',
siteimg: '../../assets/images/onsite.gif',
description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
applicants:'2 Applicants',
posted:'Posted 4 days ago',
bookmark:'../../assets/images/bookmark.gif',
experience:'Mid-level',
experienceimg:'../../assets/images/suitcase.gif'}
  ]

  
  pselectedJob:any;
  displayJob(job:any){
    this.pselectedJob = job;
  }
  
}
