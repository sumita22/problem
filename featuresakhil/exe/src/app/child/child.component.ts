import { Component, Input } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MsgboxComponent } from '../msgbox/msgbox.component';
import { ErrorboxComponent } from '../errorbox/errorbox.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
@Input() cselectedJob:any

constructor(public dialog:MatDialog){}

msgBox(){
  let dialogRef = this.dialog.open(MsgboxComponent,
    {
    backdropClass:'blur50px',
      height:'45vh',
      width:'45vw'
    });
}
errorBox(){
  let dialogRef = this.dialog.open(ErrorboxComponent,
    {
    backdropClass:'blur50px',
      height:'45vh',
      width:'45vw'
    });
}

}
