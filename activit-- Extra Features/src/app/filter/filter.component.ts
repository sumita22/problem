import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  ngOnInit():void{
   
  }
  
  @Input() all:any=0;
  @Input() free:any=0;
  @Input() premium:any=0;
  
  @Output() typeSelected  = new EventEmitter<any>();
  
  selectType(Stype: string) {
    this.typeSelected.emit(Stype);
  }
}
