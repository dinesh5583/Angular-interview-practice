import { Component, ContentChild, ContentChildren, ElementRef, EventEmitter, Input, Output, QueryList, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child-comp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.scss']
})
export class ChildCompComponent {
  // @ContentChild('color') contentColor!:ElementRef;
  @ContentChildren('color') multipleContent!:QueryList<any>;

  @ViewChild('inputRef') inputRef!:ElementRef;;
  @Input('arrayList') dataList: any;
  // @Output('childData') childEmit = new EventEmitter<any>();
  // onSubmit() {
  //   this.childEmit.emit([
  //     { country: 'INDIA', number: 989898989 },
  //     { country: 'AMERICA', number: 90000000 },
  //     { country: 'AUSTRALIA', number: 89398938 },
  //   ])
  // }
  // onInputRef(el: HTMLInputElement) {
  //   el.value = 'DInesh'
  // }
  ngAfterViewInit(){
    console.log(this.inputRef.nativeElement.value);
    this.inputRef.nativeElement.value='Rahul'
    
  }
  ngAfterContentInit(){    
    this.multipleContent.first.nativeElement.setAttribute('style','color:violet')
    this.multipleContent.last.nativeElement.setAttribute('style','color:red')

  }
}
