import { Component } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  details = [
    {
      bgimg:'../../.././assets/images/sowryam.jpg',
      image: "../../.././assets/images/dedication.jpg",
      id: 1,
      name: "SowryaGrandham",
      author: "T.Radhakrishnan",
      type: "free",
    },
    {
      bgimg:'../../.././assets/images/veenapoovu.jpg',
      image: "../../assets/images/ice.jpg",
      id: 2,
      name: "Veenapoo",
      author: "Kumaranashan",
      type: "premium",
    },
    {
      bgimg:'../../.././assets/images/eakantha.jpg',
      image: "../../assets/images/lake.jpg",
      id: 3,
      name: "Eakantha Chindhakal",
      author: "Joseph Kuruvila",
      type: "premium"
    },
    {
      bgimg:'../../.././assets/images/dracula.jpg',
      image: "../../assets/images/ice.jpg",
      id: 4,
      name: "Dracula",
      author: "Bram Stocker",
      type: "free",
    },
    {
      bgimg:'../../.././assets/images/nishabdham.jpg',
      image: "../../assets/images/ice.jpg",
      id: 5,
      name: "Nishabdha Sancharangal",
      author: "Benyamin",
      type: "premium",
    },
    {
      bgimg:'../../.././assets/images/pride.jpg',
      image: "../../assets/images/lake.jpg",
      id: 6,
      name: "Pride & Prejudice",
      author: "Jane Austen",
      type: "premium"
    }
  ]

filteredDetails: any[] = this.details;

  getAllBooks() {
return this.details.length;
  }
  getFreeBooks(){
    return this.details.filter((fly)=>fly.type === "free").length;
  }
  getPremiumBooks(){
    return this.details.filter((fly)=>fly.type === "premium").length;
  }


  selected(data:string){
    if(data==="all"){this.filteredDetails=this.details;}
    else{
      this.filteredDetails=this.details.filter((d) => d.type===data);
      
    }
   
  }
}
