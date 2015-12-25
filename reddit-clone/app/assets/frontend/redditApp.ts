/// <reference path="../../../DefinitelyTyped/angular2/angular2-2.0.0-alpha.26.d.ts"/>


import 'reflect-metadata';
import {
  Component
} from 'angular2/core';


@Component({
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
      <button (click)="addArticle(newtitle.value,newlink.value)">Submit link</button>
    </section>
    `
})
export class RedditApp {
  addArticle(title: string, link: string): void {
    console.log('Adding article with title', title,
                'and link ', link ) ;
  }
}
