import { Component } from '@angular/core';
import { CustomerComponent } from './customer/customer.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [ CustomerComponent ]
})
export class AppComponent {
    // [ attribute/property ] means property binding C to D
    // ( event ) means event binding D to C

    title = 'Customer App';
    name = 'Ward';
    wardsColor = 'green'; // just like his suit
    customers = [
      {id: 1, name: 'Ward'},
      {id: 2, name: 'Kevin'},
      {id: 3, name: 'Eric'},
      {id: 4, name: 'Sally'},
      {id: 5, name: 'Emmet'},
    ];

    changeSuitColor() {
      this.wardsColor =  this.wardsColor === 'green' ? 'red' : 'green';
    }
}
