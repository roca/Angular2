import { Component } from '@angular/core';

@Component({
  selector: 'red-card',
  template: `
    <div class="card red">
      <h4>I am a red card ({{x}})</h4>
    </div>
  `
})
export class RedCardComponent {
  x = Math.random();
}
