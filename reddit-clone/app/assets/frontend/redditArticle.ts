/// <reference path="../../../DefinitelyTyped/angular2/angular2-2.0.0-alpha.26.d.ts"/>


import 'reflect-metadata';
import {
  Component, View
} from 'angular2/core';

import Article from './article';

@Component ({
  selector: 'reddit-article',
  properties: ['article']
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
      </article>
  `
})
export default class RedditArticle {
  article: Article;

  voteUp() {
    this.article.voteUp();
    return false;
  }

  voteDown() {
    this.article.voteDown();
    return false;
  }
}
