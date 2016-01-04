
import {Component,  OnInit}  from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';

import {ArticleService}   from './article.service';
import Article   from './article';

@Component({
  providers: [ArticleService],
  template: `
  <h1> Details </h1>
    <div *ngIf="article">
      <article>
        <div class="votes">{{ article.votes }}</div>
        <div class="main">
            <div class="control-group">
              <div><label for="title">Title:</label></div>
              <div><input #newtitle name="title" value="{{article.title}}"></div>
            </div>
            <div class="control-group">
              <div><label for="link">Link:</label></div>
              <div><input #newlink name="link" value="{{article.link}}"></div>
            </div>
            <button (click)="updateArticle(newtitle,newlink)">Update Article</button>
          <ul>
            <li><a href (click)="voteUp()">upvote</a></li>
            <li><a href (click)="voteDown()">downvote</a></li>
          </ul>
        </div>
      </article>
      <button style="float:right;" (click)="onSelect()">
        <span>back</span>
      </button>
    </div>
  `
})
export class RedditArticleDetails implements OnInit  {
  article: Article;

  constructor(
    private _router: Router,
    private _routeParams: RouteParams,
    private _articleService: ArticleService) {}
  ngOnInit() {
    let id = this._routeParams.get('id');
    this._articleService.getOneArticle(parseInt(id))
    .subscribe(
      (data) => {
        this.article = new Article(data.id, data.title, data.link, data.votes);
      },
      err => console.log(err),
      () => console.log('Got one Article !')
    );

  }

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
  updateArticle(newtitle, newlink) {
    console.log('Need to post back to server here !');
  }


  onSelect() {
    this._router.navigate( ['Articles'] );
  }

}
