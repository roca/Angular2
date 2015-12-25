/// <reference path="../../../DefinitelyTyped/angular2/angular2-2.0.0-alpha.26.d.ts"/>


import 'reflect-metadata';
import {
  Component
} from 'angular2/core';


@Component({
  selector: 'hello-world',
  template: `
    <ul>
      <li *ngFor="#name of names">
        Hello {{ name }}
      </li>
    </ul>
    `
})
export class HelloWorld {

  names: Array<string>;

  constructor() {
    this.names = ['Romel', 'Steve', 'Joe'];
  }

}
