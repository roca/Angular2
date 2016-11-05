import {Component} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {Router} from '@angular/router';

@Component({
  selector: 'my-app',
  template: `
    <nav-bar></nav-bar>
    <router-outlet></router-outlet>
    <footer>
      <hr>
      <p>footer goes here.</p>
    </footer>
  `,
  providers: [Title]
})
export class PageComponent {
  constructor(router: Router, title: Title) {
    // router.changes.subscribe(() => {
    //   // fires on every URL change
    //   title.setTitle(router.serializeUrl(router.urlTree));
    // });
  }
}
