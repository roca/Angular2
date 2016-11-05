import { Component } from '@angular/core';

import { PhoneLoader } from './phoneLoader';

@Component({
  selector: 'my-app',
  templateUrl: './phones.html',
  providers: [PhoneLoader]
})
export class PhonesComponent {
  constructor(public phoneLoader: PhoneLoader) { }
}
