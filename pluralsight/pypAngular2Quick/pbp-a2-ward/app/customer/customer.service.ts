import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';

const CUSTOMERS_URL = 'app/customers.json';

@Injectable()
export class CustomerService {

  constructor(private _http: Http) {}

  getCustomers() {
    return this._http.get(CUSTOMERS_URL)
    .toPromise()
    .catch((err: Error) => {
      console.log(`Error ${err.name}: ${err.message}`);
      return Promise.reject(err);
    });
  }

  getCustomers_RxObservable(): Observable<any[]> {
    return this._http.get(CUSTOMERS_URL)
    .map((response: Response) => response.json())
    .catch(this._handleError);
  }

  _handleError(err: Error) {
    // log this somewhere and format the message well for devs
    // our oppertunity customize this error
    console.log(`Error ${err.name}: ${err.message}`);
    return Observable.throw(err);
  }

}
