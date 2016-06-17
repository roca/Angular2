import { Component } from "angular2/core";
import { HTTP_PROVIDERS } from "angular2/http";
import "rxjs/Rx"; // Load all features
import { ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES } from "angular2/router";

import { WelcomeComponent } from "./home/welcome.component";
import { ProductListComponent } from "./products/product-list.component";
import { ProductService } from "./products/product.service";

@Component ({
  selector: "pm-app",
  template: `
  <div>
    <nav class="navbar navbar-default">
      <div class="fluid-container">
        <a class="navbar-brand">{{ pageTitle }}</a>
        <ul class="nav navbar-nav">
          <li><a [routerLink]="['Welcome']">Home</a><li>
          <li><a [routerLink]="['Products']">Product List</a><li>
        </ul>
      </div>
    </nav>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  </div>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [ProductService, HTTP_PROVIDERS, ROUTER_PROVIDERS]
})
@RouteConfig([
  { path: "/welcome", name: "Welcome", component: WelcomeComponent, useAsDefault: true},
  { path: "/products", name: "Products", component: ProductListComponent }
])
export class AppComponent {
  pageTitle: string = "Acme Product Management";
}
