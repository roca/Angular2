import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './events.html'
})
export class EventsComponent {
  n: number = 0;

  increment(x: any) {
    console.log('increment: ', x);
    this.n++;
  }

  over(x: MouseEvent): void {
    console.log('Over: ', x);
  }

  move(x: MouseEvent): void {
    this.n++;
    console.log('Move: ', x);
  }
  
  keydown(x: any) {
    console.log('Keydown: ', x);
  }
}
