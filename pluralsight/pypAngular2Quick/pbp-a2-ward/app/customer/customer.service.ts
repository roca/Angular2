import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

const CUSTOMERS_URL = 'app/customers.json';

@Injectable()
export class CustomerService {

  constructor(private _http: Http) {}

  getCustomers() {
    return this._http.get(CUSTOMERS_URL)
    .map((response: Response) => response.json());
  }

}
