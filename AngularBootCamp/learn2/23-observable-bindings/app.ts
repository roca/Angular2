import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AnakinComponent }  from './anakin';

@NgModule({
  declarations: [AnakinComponent],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  bootstrap: [AnakinComponent]
})
export class AppModule { }
