import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {RedditApp} from './redditApp';
import {RedditArticleDetails} from './redditArticleDetails';


@Component({
  selector: 'my-app',
  template: `
    <h1 class="title">Reddit App</h1>
    <a [routerLink]="['Articles']">Articles</a>
    <hr/>
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/', name: 'Articles', component: RedditApp, useAsDefault: true},
  { path: '/article-details/:id', name: 'ArticleDetails', component: RedditArticleDetails}
])
export class AppComponent { }
