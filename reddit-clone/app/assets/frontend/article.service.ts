import Article from './article';
//import {Articles} from './mock-articles';
import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import 'rxjs/Rx';


@Injectable()
export class ArticleService {
  articles: Array<Article>;

  constructor(private _http: Http) {}

  getArticles() {
    return this._http.get('/articles').map(res => res.json());
  }

}
