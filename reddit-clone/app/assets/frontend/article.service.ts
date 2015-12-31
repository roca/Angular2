import Article from './article';
//import {Articles} from './mock-articles';
import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';
import 'rxjs/Rx';


@Injectable()
export class ArticleService {
  articles: Array<Article>;

  constructor(private _http: Http) {}

  getArticles() {
    return this._http.get('/articles').map(res => res.json());
  }

  addArticle(title: string, link: string) {

    var articleInfo = 'title=' + title + '&link=' + link;

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    return this._http.post('/articles', articleInfo, {headers: headers}).map(res => res.json());
  }

  deletedOneArticle(id: number) {
    return this._http.delete('/articles/' + id);
  }

}
