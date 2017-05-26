import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent, DialogResultExampleDialog } from './app.component';

import {MaterialModule, MdNativeDateModule} from '@angular/material';
import {trigger, state, style, transition, animate} from '@angular/animations';
import { NoopAnimationsModule,BrowserAnimationsModule } from '@angular/platform-browser/animations';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    DialogResultExampleDialog
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    MaterialModule,
    MdNativeDateModule
  ],
  providers: [],
  entryComponents: [
    DialogResultExampleDialog
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
