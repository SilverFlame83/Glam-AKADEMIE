import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { AkademieModule } from './akademie/akademie.module';
import { StartComponent } from './start/start.component';
import { SharedComponent } from './shared/shared.component';




@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    SharedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    AkademieModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
