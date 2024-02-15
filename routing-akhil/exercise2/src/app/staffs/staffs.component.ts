import { Component } from '@angular/core';
import { user } from '../stf';

@Component({
  selector: 'app-staffs',
  templateUrl: './staffs.component.html',
  styleUrls: ['./staffs.component.css']
})
export class StaffsComponent {

  image!: ImageData;
  shortLists: user[];
  shortListed: user[];
  constructor() {
    this.shortLists = [
      {
        image: "../../assets/images/user1.jpg",
        name: "Alainne Scott",
        id: "0231",
        designation: "Team Manager",
        email: "scottalainne@gmail.com"

      },
      {
        image: "../../assets/images/user2.jpg",
        name: "Sarah Noah",
        id: "0891",
        designation: "UI/UX Designer",
        email: "noahsarah@gmail.com"
      },
      {
        image: "../../assets/images/user3.jpg",
        name: "Vivek Ram",
        id: "5012",
        designation: "Marketing Manager",
        email: "rammohanvivek@gmail.com"
      },
      {
        image: "../../assets/images/user4.jpg",
        name: "Dennis Lilly",
        id: "9001",
        designation: "Tech Lead",
        email: "lildave@gmail.com"
      },
      {
        image: "../../assets/images/user5.jpg",
        name: "Ruby Grace",
        id: "0127",
        designation: "Tech Support",
        email: "graceofgod@gmail.com"
      },
      {
        image: "../../assets/images/user6.jpg",
        name: "Arushi Pratik",
        id: "0634",
        designation: "Legal Advisor",
        email: "alwaysarush@gmail.com"
      },
      {
        image: "../../assets/images/pic7.jpg",
        name: "Onyankapov Sem",
        id: "3471",
        designation: "Service Advisor",
        email: "oniichan@gmail.com"
      },
      {
        image: "../../assets/images/pic6.jpg",
        name: "Visal Dev",
        id: "6589",
        designation: "Purchase Expert",
        email: "devduttvis@gmail.com"
      }

    ];
    this.shortListed = this.shortLists;


  }
  filterdetails(event: Event): void {
    const searchTerm = (event.target as HTMLInputElement).value;

    this.shortListed = this.shortLists.filter(shortList =>
    (shortList.name.toLowerCase().includes(searchTerm.toLowerCase()) || (shortList.id.toLowerCase().includes(searchTerm.toLowerCase()))

    ));

  }

}
