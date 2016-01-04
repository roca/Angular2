import {
  Component, View, EventEmitter
} from 'angular2/core';
import {Router}              from 'angular2/router';


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
        <button style="float:right;" (click)="onSelect(article.id)">
          <span>detail</span>
        </button>
      </article>
  `
})
export default class RedditArticle {
  article: Article;
  deletedOneArticle = new EventEmitter();

  constructor(private _articleService: ArticleService, private _router: Router) { }

  voteUp() {
    this.article.voteUp();
    this.patchOneArticle();
    return false;
  }

  voteDown() {
    this.article.voteDown();
    this.patchOneArticle();
    return false;
  }

  patchOneArticle() {
    this._articleService.patchOneArticle(this.article.id, this.article.votes).subscribe(
      null,
      err => console.log(err),
      () => console.log('Patch One Articles votes !')
    );
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

  onSelect(id: number) {
    this._router.navigate( ['ArticleDetails', { id: id }] );
  }

}
