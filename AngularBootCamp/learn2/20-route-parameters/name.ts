import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  template: `
    <div class="card">
      <div class="card-content">
        <div class="card-title">Hello {{message}}</div>
        <p>This is a less simple example component.</p>
      </div>
    </div>
  `
})
export class NameComponent implements OnInit {
  private message: string;
  private sub: Subscription;

  constructor(private route: ActivatedRoute) {
    console.log("Constructing");
   }

  ngOnInit() {
    console.log('initing');
    this.sub = this.route.params.subscribe(params => {
      console.log("Got new value for params", params);
      this.message = params['who'];
    });
  }

  ngOnDestroy() {
    console.log("Destroying");
    this.sub.unsubscribe();
  }
}
