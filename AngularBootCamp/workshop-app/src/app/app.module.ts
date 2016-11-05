import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ShipNameComponent } from './ship-name/ship-name.component';
import { ShipFilterComponent } from './ship-filter/ship-filter.component';
import { ShipListComponent } from './ship-list/ship-list.component';
import { ShipCardComponent } from './ship-card/ship-card.component';
import { StarshipService } from './starship.service';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'welcome/:who', component: WelcomeComponent},
  {path: '**', redirectTo: 'welcome/jack'}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WelcomeComponent,
    ShipNameComponent,
    ShipFilterComponent,
    ShipListComponent,
    ShipCardComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [StarshipService],
  bootstrap: [AppComponent]
})
export class AppModule { }
