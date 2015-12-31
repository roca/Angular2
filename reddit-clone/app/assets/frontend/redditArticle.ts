/// <reference path="../../../DefinitelyTyped/angular2/angular2-2.0.0-alpha.26.d.ts"/>


import 'reflect-metadata';
import {
  Component, View, EventEmitter
} from 'angular2/core';

import Article from './article';
import {ArticleService} from './article.service';

@Component ({
  selector: 'reddit-article',
  properties: ['article'],
  events: ['deletedOneArticle'],
  providers: [ArticleService]
})
@View ({
  template: `
      <article>
        <div class="votes">{{ article.votes }}</div>
        <div class="main">
          <h2>
            <a href="{{ article.link }}">{{ article.title }}</a>
          </h2>
          <ul>
            <li><a href (click)="voteUp()">upvote</a></li>
            <li><a href (click)="voteDown()">downvote</a></li>
          </ul>
        </div>
        <button style="float:right;" (click)="delete(article.id)">
          <span>&times;</span>
        </button>
      </article>
  `
})
export default class RedditArticle {
  article: Article;
  deletedOneArticle = new EventEmitter();

  constructor(private _articleService: ArticleService) { }

  voteUp() {
    this.article.voteUp();
    return false;
  }

  voteDown() {
    this.article.voteDown();
    return false;
  }

  delete(id: number) {
    console.log(id);
    this._articleService.deletedOneArticle(id).subscribe(
      null,
      err => console.log(err),
      () => {
        console.log('deletedOneArticle event being emitted !');
        this.deletedOneArticle.emit(null);
      }
    );

  }

}
