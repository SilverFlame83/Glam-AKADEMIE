import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UberUnsComponent } from './uber-uns/uber-uns.component';
import { AkademieRoutingModule } from './akademie-routing.module';
import { CoreModule } from '../core/core.module';
import { KurseComponent } from './kurse/kurse.component';



@NgModule({
  declarations: [
    UberUnsComponent,
    KurseComponent
  ],
  imports: [
    CommonModule,
    AkademieRoutingModule,
    CoreModule
  ]
})
export class AkademieModule { }
