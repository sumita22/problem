import { Component } from '@angular/core';
import { SupportService } from '../support.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  profile: any[]=[]
  constructor(private support:SupportService){
    this.profile=this.support.getUserDetails()
  }
}
