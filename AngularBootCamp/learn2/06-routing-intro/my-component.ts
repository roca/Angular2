import { Component } from '@angular/core';
import { RouteParams } from '@angular/router';


@Component({
  selector: 'my-component',
  template: `
    <div class="card">
      <div class="card-content">
        <div class="card-title">Welcome Home</div>
        <p>This is a simple example of my component.</p>
      </div>
      {{id}}
    </div>
  `
})
export class MyComponent {
  public id: number;
  
}
