import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { TitleDisplayComponent }  from './titleDisplay';

@NgModule({
  declarations: [TitleDisplayComponent],
  imports: [BrowserModule, HttpModule],
  bootstrap: [TitleDisplayComponent]
})
export class AppModule { }
