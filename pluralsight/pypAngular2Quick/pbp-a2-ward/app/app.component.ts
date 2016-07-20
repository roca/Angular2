import { Component } from '@angular/core';
// import { CustomerService } from './customer/customer.service';
// import { CustomersComponent } from './customer/customers.component';

// here is my barrel // future I woild just import './customer'
import { CustomersComponent, CustomerService } from './customer/index';


@Component({
    moduleId: __moduleName,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    directives: [ CustomersComponent ],
    providers: [ CustomerService ]
})
export class AppComponent {
    // [ attribute/property ] means property binding C to D
    // ( event ) means event binding D to C

    title = 'Customer App';
    name = 'Ward';
    wardsColor = 'green'; // just like his suit

    changeSuitColor() {
      this.wardsColor =  this.wardsColor === 'green' ? 'red' : 'green';
    }
}
