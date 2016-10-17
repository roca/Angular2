import {Component} from '@angular/core';

@Component({
  template: `
    <p>I am a sample component, loaded asyncronously.</p>
  `
})
export class NameComponent {
}

console.log('nameComponent.ts has been loaded.');
