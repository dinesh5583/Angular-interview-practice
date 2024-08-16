import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child-comp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.scss']
})
export class ChildCompComponent {
  @Input('arrayList') dataList:any;
  @Output('childData') childEmit=new EventEmitter<any>();
  onSubmit(){
    this.childEmit.emit([
      {country:'INDIA', number:989898989},
      {country:'AMERICA', number:90000000},
      {country:'AUSTRALIA', number:89398938},
    ])
  }
}
