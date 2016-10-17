import { Component, OnInit } from '@angular/core';

import { GreetingCalculator } from './greetingCalculator';

@Component({
  selector: 'my-app',
  templateUrl: './greeter.html'
})
export class GreeterComponent implements OnInit {
  greeting: string;

  constructor(private gc: GreetingCalculator) {
  }

  ngOnInit() {
    this.greeting = this.gc.greeting();
  }
}
