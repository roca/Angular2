import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {IShip} from '../ship-list/ship-list.component';

@Component({
  selector: 'ship-card',
  templateUrl: './ship-card.component.html',
  styleUrls: ['./ship-card.component.css']
})
export class ShipCardComponent implements OnInit {
  @Input() ship: IShip;
  @Output() selectShip = new EventEmitter<IShip>();
  constructor() { }

  ngOnInit() {
  }

  userSelectShip(ship: IShip) {
    this.selectShip.emit(ship);
  }
}
