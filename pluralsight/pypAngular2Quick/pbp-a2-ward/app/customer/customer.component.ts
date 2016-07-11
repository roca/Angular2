import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-customer', // <app-customer>
    templateUrl: 'app/customer/customer.component.html'
})
export class CustomerComponent implements OnInit {
  myColour: string = 'grey';

  @Input() customer: {id: number, name: string};

  constructor() {}
  ngOnInit() {}
}
