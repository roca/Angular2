/// <reference path="../../../DefinitelyTyped/angular2/angular2-2.0.0-alpha.26.d.ts"/>


import 'reflect-metadata';
import {
  Component
} from 'angular2/core';

import RedditArticle from './redditArticle';

import Article from './article';

@Component({
  directives: [RedditArticle],
  selector: 'reddit',
  template: `
    <section class="new-link">
      <div class="control-group">
        <div><label for="title">Title:</label></div>
        <div><input #newtitle name="title"></div>
      </div>
      <div class="control-group">
        <div><label for="link">Link:</label></div>
        <div><input #newlink name="link"></div>
      </div>
      <button (click)="addArticle(newtitle,newlink)">Submit link</button>
    </section>
    <reddit-article *ngFor="#article of articles" [article]="article"></reddit-article>
    `
})
export class RedditApp {
  articles: Array<Article>;

  constructor() {
    this.articles = [
      new Article('Angular 2', 'http://angular.10'),
      new Article('Fullstack', 'http://fullstack.io')
    ];
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): void {
    this.articles.push(new Article(title.value, link.value));
    console.log('Adding article with title', title.value,
                'and link ', link.value ) ;
    title.value = '';
    link.value = '';
  }
}
