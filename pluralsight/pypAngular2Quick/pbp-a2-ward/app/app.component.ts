import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
})
export class AppComponent {
    // [ attribute/property ] means property binding C to D
    // ( event ) means event binding D to C

    title = 'Customer App';
    name = 'Ward';
    wardsColor = 'blue'; // just like his suit

    changeSuitColor() {
      this.wardsColor =  this.wardsColor === 'blue' ? 'red' : 'blue';
    }
}
