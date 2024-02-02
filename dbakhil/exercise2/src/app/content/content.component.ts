import { Component } from '@angular/core';
import{shortList} from '../namelist';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  image!: ImageData;
shortLists:shortList[];
shortListed:shortList[];
constructor(){
  this.shortLists=[
    { image:"../../assets/images/pic4.jpg",
      name:"Alen",
      qualification:"Msc.CS",
      year:2,
      place:"Thrissur",
    },
    { image:"../../assets/images/pic1.jpg",
      name:"Sarah",
      qualification:"Bca",
      year:3,
      place:"Trivandrum",
    },
    { image:"../../assets/images/pic5.jpg",
      name:"Vivek",
      qualification:"M.Tech",
      year:2,
      place:"Palakkad",
    },
    { image:"../../assets/images/pic6.jpg",
      name:"Deepak",
      qualification:"MCA",
      year:4,
      place:"Kottayam",
    },
    { image:"../../assets/images/pic3.jpg",
      name:"Ruby",
      qualification:"Bsc.AI",
      year:5,
      place:"Kottayam",
    },
    { image:"../../assets/images/pic2.jpg",
    name:"Arushi",
    qualification:"MCA",
    year:1,
    place:"Alappuzha",
  }

  ];
  this.shortListed=this.shortLists;
  

}
filterdetails(event: Event): void {
  const searchTerm = (event.target as HTMLInputElement).value;
 
  this.shortListed = this.shortLists.filter(shortList =>
    shortList.name.toLowerCase().includes(searchTerm.toLowerCase()) 
   
  );
 
}
}


   

