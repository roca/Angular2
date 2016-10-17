import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class PhoneLoader {
  constructor(private http: Http) { }

  load() {
    return this.http.get('../demo-data/phones.json');
  }
}
