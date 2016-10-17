import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  styleUrls: ['./component.css'],
  template: `
          <h4>Interact Below to Change the appearance</h4>
          <button class="btn" (click)="increment()">Add One</button>
          <p>n = {{n}}</p>

          <h2>Results</h2>

          <div class="row">
            <div class="col s6">
              <!-- Built-in binding syntax -->
              <div class="card"
                  [class.round-border]="n > 7"
                  [class.extra-class]="n < 3"
                  [style.width.px]="n * 10 + 250"
                  [style.height.em]="n + 12">
                  <div class="card-content">
                    <div class="card-title">Attribute Binding</div>
                    I change appearance based upon the number of clicks!
                    <p [hidden]="n==6">N is not 6 (not recommended, not !important)</p>
                  </div>
              </div>
            </div>

            <div class="col s6">
              <!-- NgClass additional directive -->
              <!--[ngClass]="{'fat-border': 'true'}"-->
              <div class="card"
                  [class.example2]="n > 9"
                  [ngClass]="classFor(n)"
                  [style.width.px]="n * 10 + 250"
                  [style.height.em]="n + 12"
                  [style.border-radius]="n + 'px'"
                  [style.display]="n==4 ? 'none !important' : 'block'">

                <div class="card-content">
                  <div class="card-title">ngClass</div>
                  I change appearance based upon the number of clicks!
                </div>
              </div>
            </div>

          </div>

  `
})
export class VisualsComponent {
  n: number = 1;

  increment() {
    this.n++;
  }

  classFor(x: number): string {
    if (x > 7) {
      return 'extra-class';
    }
  }
}
