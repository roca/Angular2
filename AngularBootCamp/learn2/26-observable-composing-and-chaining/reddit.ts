import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

import { RedditImageSearch, IRedditItem } from './redditImageSearch';

@Component({
  selector: 'my-app',
  templateUrl: './reddit.html',
  providers: [RedditImageSearch]
})
export class RedditComponent implements OnInit {
  searchForm: FormGroup;
  results: Observable<IRedditItem[]>;

  constructor(private ris: RedditImageSearch, private fb: FormBuilder) { }

  ngOnInit() {
    this.searchForm = this.fb.group({ searchControl: [''] });
    const debouncedSearchTarget = this.searchForm.controls['searchControl'].valueChanges
      .do(x => console.log('change', x))
      .debounceTime(500)
      .do(x => console.log('after debounce', x));
    this.results = this.ris.search(debouncedSearchTarget);
  }
}
