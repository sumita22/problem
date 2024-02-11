
import { Component, OnInit, ViewChild,TemplateRef } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-msgbox',
  templateUrl: './msgbox.component.html',
  styleUrls: ['./msgbox.component.css']
})
export class MsgboxComponent {

  fromDialog!:string;

  constructor(public dialog:MatDialog){}
  ngOnInit(): void {
   this.fromDialog="phd"
  }
  

@ViewChild('dialogRef')
dialogRef!: TemplateRef<any>

myDisplay=
  {
    sign:"../../assets/images/tick.png",
    message: "Successfully Applied",
    message2: "Please wait for the recruiters to respond, best regards"
  };
  
}
