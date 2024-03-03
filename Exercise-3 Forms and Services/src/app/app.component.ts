import { Component, OnInit } from '@angular/core';
import { SupportService } from './support.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'trip';

  // constructor(private support:SupportService){
    
  // }

  // ngOnInit(){
  //   var profile = new Profile("Akhita Akhil","akhitagmail.com","Kerala",9876543210,"Software Developer");
  //   this.support.updateProfileData(profile);
  //   console.log(profile);
  // }
}
