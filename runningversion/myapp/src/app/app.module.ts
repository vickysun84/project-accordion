import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {VickyAccordionModule} from 'vicky-accordion'
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    VickyAccordionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
