import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParentCompRoutingModule } from './parent-comp-routing.module';
import { ParentCompComponent } from './parent-comp.component';
import { ChildCompComponent } from '../child-comp/child-comp.component';


@NgModule({
  declarations: [
    ParentCompComponent
  ],
  imports: [
    CommonModule,
    ParentCompRoutingModule,
    ChildCompComponent
  ],
  exports:[
    ParentCompComponent
  ]
})
export class ParentCompModule { }
