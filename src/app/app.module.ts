import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CoreConfig} from './app.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CoreConfig
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
