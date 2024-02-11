import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-errorbox',
  templateUrl: './errorbox.component.html',
  styleUrls: ['./errorbox.component.css']
})
export class ErrorboxComponent {

  fromDialog!:string;

  constructor(public dialog:MatDialog){}
  ngOnInit(): void {
   this.fromDialog="phd"
  }
  

@ViewChild('dialogRef')
dialogRef!: TemplateRef<any>
  myError=
  {
    esign:"../../assets/images/error.png",
    message1:'Oops something went wrong !',
    message3:'You cannot send messages to the recruiters unless you follow each other'
  }
}
