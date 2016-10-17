import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

// Generated with
// ng generate service sw

@Injectable()
export class SwService {

  constructor(private http: Http) { }

  getArchetypes() {
    return this.http.get('/assets/companies.json')
      .map((r: Response) => r.json());
  }
  getCompanyDetails(id: number) {
    return this.http.get('/assets/companies.json')
      .map(r => r.json())
      .map(l => l[id]);
  }
}
