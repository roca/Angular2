/// <reference path="../../../DefinitelyTyped/angular2/angular2-2.0.0-alpha.26.d.ts"/>
import 'reflect-metadata';


import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {RedditApp} from './redditApp';


@Component({
  selector: 'my-app',
  template: `
    <h1 class="title">Component Router</h1>
    <a [routerLink]="['Articles']">Articles</a>
    <a [routerLink]="['ArticleDetail']">Article</a>
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/', name: 'Articles', component: RedditApp, useAsDefault: true}
])
export class AppComponent { }
