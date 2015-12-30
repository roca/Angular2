import Article from './article';
import {Articles} from './mock-articles';
import {Injectable} from 'angular2/core';

@Injectable()
export class ArticleService {
  getArticles() {
    return Promise.resolve(Articles);
  }

  getArticlesSlowly() {
  return new Promise<Article[]>(resolve =>
    setTimeout(() => resolve(Articles), 2000) // 2 seconds
  );
}
}
