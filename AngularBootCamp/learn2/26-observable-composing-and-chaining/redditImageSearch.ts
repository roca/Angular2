import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/Rx';

export interface IRedditItem {
  url?: string;
  title?: string;
}

@Injectable()
export class RedditImageSearch {
  constructor(private http: Http) { }

  search(target: Observable<string>): Observable<IRedditItem[]> {
    return target.switchMap((val: string) => this.searchRedditPics(val));
  }

  private searchRedditPics(search: string): Observable<IRedditItem[]> {
    const baseUrl = 'https://www.reddit.com/r/aww/search.json?restrict_sr=on&q=';
    return this.http.get(baseUrl + search)
      .map((res: Response) => res.json())
      .map(translateRedditResults);
  }
}

function translateRedditResults(items: any) {
  // This function is doesn't know anything about HTML or Observable; it just
  // manages the messy shape of this API's data return layout.

  const x = items.data.children;
  return x.map((item: any): IRedditItem => {
    if (item && item.data && item.data.thumbnail) {
      let thumb = item.data.thumbnail;
      if (thumb.startsWith('http')) {
        return { url: thumb };
      }
    }
    return { title: item.data.title };
  });
}
