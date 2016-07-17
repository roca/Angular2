import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

// import { Observable } from 'rxjs/Rx';
import { CustomerComponent } from './customer.component';
import { CustomerService } from './customer.service';

@Component({
    moduleId: __moduleName,
    selector: 'app-customers', // <app-customers>
    templateUrl: 'customers.component.html',
    directives: [ CustomerComponent ],
    providers: [ CustomerService ]
})
export class CustomersComponent implements OnInit {
  customers: Promise<any[]>;
  // customers: Observable<any[]>;

  constructor(private _customerService: CustomerService) {}

  ngOnInit() {
    this.customers = this._customerService.getCustomers() // Ignore
    .catch((err: Error) => {
      console.log(`Error ${err.name}: ${err.message}`);
    });
    // Rx observable version
    // this.customers = this._customerService.getCustomers() // Ignore
    // .catch((err: Error) => {
    //   // dont do this, show the user a nice message
    //   // now we eat it, but only if the message has been
    //   // communicated to the user
    //   console.log(`Error ${err.name}: ${err.message}`);
    //   return Observable.from([]);
    // });
  }

}
