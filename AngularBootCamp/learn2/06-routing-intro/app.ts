import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { PageComponent } from './page';
import { HomeComponent } from './home';
import { NameComponent } from './name';
import { MyComponent } from './my-component'

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'hello', component: NameComponent },
  { path: 'my/:id', component: MyComponent }
];

@NgModule({
  declarations: [
    PageComponent,
    HomeComponent,
    NameComponent,
    MyComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  bootstrap: [PageComponent]
})
export class AppModule { }

// Example of hash route
// http://example.com/#/product/12

// Example of HTML5 route
// http://example.com/product/12

// base-href must be set either in the index.html, or via
// code; here is an older way to do this:
//   bind(APP_BASE_HREF).toValue(location.pathname)]);
// HTML5 routes can be demonstrated with live-server --entry-file=index.html
