import { Component } from '@angular/core';

import {CarStateService} from '../car-state.service';

@Component({
  selector: 'car-order',
  templateUrl: 'car-order/car-order.component.html',
  styleUrls: ['car-order/car-order.component.css'],
  providers: [CarStateService]
})
export class CarOrderComponent { }
