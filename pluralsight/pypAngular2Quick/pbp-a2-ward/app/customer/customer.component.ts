import { Component, Input, OnInit } from '@angular/core';

@Component({
    moduleId: __moduleName,
    selector: 'app-customer', // <app-customer>
    templateUrl: 'customer.component.html'
})
export class CustomerComponent implements OnInit {
  myColour = 'grey';

  @Input() customer: {id: number, name: string};

  constructor() {}
  ngOnInit() {}
}
