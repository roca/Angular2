import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';

const CUSTOMERS_URL = 'app/customers.json';

@Injectable()
export class CustomerService {

  constructor(private _http: Http) {}

  getCustomers() {
    return this._http.get(CUSTOMERS_URL)
    .map((response: Response) => response.json())
    .catch(this._handleError);
  }

  _handleError(err: any) {
    console.log(err);
    return Observable.throw(err);
  }

}
