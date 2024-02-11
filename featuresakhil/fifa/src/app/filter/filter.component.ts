import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OnInit} from '@angular/core';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})

export class FilterComponent {
  ngOnInit():void{

  }
  
  @Output() onSelected = new EventEmitter<string>();
  
  @Input() all:any=0;
  @Input() free:any=0;
  @Input() premium:any=0;

  onClick(data:string){
    
    this.onSelected.emit(data);
  }
}
