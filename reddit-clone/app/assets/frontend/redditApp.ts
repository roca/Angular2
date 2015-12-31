/// <reference path="../../../DefinitelyTyped/angular2/angular2-2.0.0-alpha.26.d.ts"/>


import 'reflect-metadata';
import {
  Component
} from 'angular2/core';
import {OnInit} from 'angular2/core';

import RedditArticle from './redditArticle';

import Article from './article';
import {ArticleService} from './article.service';


@Component({
  directives: [RedditArticle],
  selector: 'reddit',
  providers: [ArticleService],
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
    <reddit-article
    *ngFor="#article of articles"
    (deletedOneArticle)="getArticles()"
    [article]="article"></reddit-article>
    `
})
export class RedditApp implements OnInit {
  articles: Array<Article>;

  constructor(private _articleService: ArticleService) { }

    ngOnInit() {
      this.getArticles();
    }

    getArticles() {
      this._articleService.getArticles()
      .subscribe(
        (data) => {
          this.articles = data.map(data => new Article(data.id, data.title, data.link, data.votes));
        }
        ,
        err => console.log(err),
        () => console.log('Articles get request Complete')
      );
    }


  addArticle(title: HTMLInputElement, link: HTMLInputElement): void {
    this._articleService.addArticle(title.value, link.value)
    .subscribe(
      data => this.articles.push(new Article(data.id, data.title, data.link)),
      err => console.log(err),
      () => console.log('Articles post request Complete')
    );
  }

}
