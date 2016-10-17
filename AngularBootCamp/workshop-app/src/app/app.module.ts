import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';
import { SelectionScreenComponent } from './selection-screen/selection-screen.component';
import { ShipNameComponent } from './ship-name/ship-name.component';
import { ShipFilterComponent } from './ship-filter/ship-filter.component';
import { ShipListComponent } from './ship-list/ship-list.component';
import { ShipCardComponent } from './ship-card/ship-card.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'selection', component: SelectionScreenComponent },
  { path: 'home', component: HomeComponent },
  { path: 'welcome', component: WelcomeScreenComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    WelcomeScreenComponent,
    SelectionScreenComponent,
    ShipNameComponent,
    ShipFilterComponent,
    ShipListComponent,
    ShipCardComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes,{useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
