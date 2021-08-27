import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UberUnsComponent } from './uber-uns/uber-uns.component';
import { AkademieRoutingModule } from './akademie-routing.module';



@NgModule({
  declarations: [
    UberUnsComponent
  ],
  imports: [
    CommonModule,
    AkademieRoutingModule
  ]
})
export class AkademieModule { }
