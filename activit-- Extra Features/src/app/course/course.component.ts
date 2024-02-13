import { Component } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  details=[
    {
      image:"../../assets//images/ikigai.jpeg",
      alt:"Ikigai",
      id:"1",
      name:"Ikigai",
      author:"Hector Puigcerver",
      type:"free"
    },
    {
      image:"../../assets//images/theSubtleArt.jpeg",
      alt:"The subtle art of not giving a ****",
      id:"2",
      name:"The subtle art of not giving a ****",
      author:"Mark Manson",
      type:"premium"
    },
    {
      image:"../../assets//images/surrounded.jpeg",
      alt:"Surrounded By Idiots",
      id:"3",
      name:"Surrounded By Idiots",
      author:"Thomas Erickson",
      type:"premium"
    },
    {
      image:"../../assets//images/artofsayingno.jpeg",
      alt:"The Art of Saying No",
      id:"4",
      name:"The Art of Saying No",
      author:"Damon Zahariades",
      type:"free"
    },
    {
      image:"../../assets/images/thinklikeamonk.jpeg",
      alt:"Think Like A Monk",
      id:"4",
      name:"Think Like A Monk",
      author:"Jay Shetty",
      type:"free"
    }
  ]
  filteredDetails:any=this.details;
  
  OntypeSelected(Stype: string) {
    if (Stype === 'all') {
      this.filteredDetails = this.details;
    } else {
      this.filteredDetails = this.details.filter(person => person.type === Stype);
    }
  }
  
  getAllBooks(){
    return this.details.length;
  }
  getFreeBooks(){
  return this.details.filter(temp=>(temp.type==="free")).length
  }
  getPremiumBooks(){
    return this.details.filter(temp=>(temp.type==="premium")).length
  }
}
