import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { CustomerComponent } from './customer.component';
import { CustomerService } from './customer.service';

@Component({
    moduleId: __moduleName,
    selector: 'app-customers', // <app-customers>
    templateUrl: 'customers.component.html',
    directives: [ CustomerComponent ]
})
export class CustomersComponent implements OnInit {
  customers: any[];
  // customers: Observable<any[]>;
  // customers: Promise<Response>;
  // customers: Promise<any>;

  constructor(private _customerService: CustomerService) {}

  ngOnInit() {

    // Promise version 1
    this._customerService.getCustomers()
    .then((response: Response) => this.customers = response.json())
    .catch((err: Error) => console.log(`Error ${err.name}: ${err.message}`));

    // Rx observable version 1
    // this._customerService.getCustomers_RxObservable() // Ignore
    // .subscribe(
    // (customers) => this.customers = customers,
    // (err: Error) => console.log(`Error ${err.name}: ${err.message}`)
    // );
    // Rx observable version 2
    // this.customers = this._customerService.getCustomers_RxObservable() // Ignore
    // .catch((err: Error) => {
    //   // dont do this, show the user a nice message
    //   // now we eat it, but only if the message has been
    //   // communicated to the user
    //   console.log(`Error ${err.name}: ${err.message}`);
    //   return Observable.from([]);
    // });
  }

}
