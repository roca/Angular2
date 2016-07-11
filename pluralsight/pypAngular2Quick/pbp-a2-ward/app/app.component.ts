import { Component } from '@angular/core';
import { CustomersComponent } from './customer/customers.component';

@Component({
    moduleId: __moduleName,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    directives: [ CustomersComponent ]
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
