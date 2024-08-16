import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-comp',
  templateUrl: './parent-comp.component.html',
  styleUrls: ['./parent-comp.component.scss']
})
export class ParentCompComponent {
  userData:any[]=[];
  childEmitData:any[]=[]
  onClick(){
    this.userData=[
      {name:'Dinesh',study:'MCA'},
      {name:'Pankaj',study:'B.tech'},
      {name:'Ashutosh',study:'BCA'},
      {name:'Rajesh',study:'Mtech'},

    ]
  }
  ongetData(event:any){
    this.childEmitData=event;
  }
}
