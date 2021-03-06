import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {StarshipService, IShip} from '../starship.service';

@Component({
  selector: 'ship-list',
  templateUrl: './ship-list.component.html',
  styleUrls: ['./ship-list.component.css']
})
export class ShipListComponent implements OnInit {
  ships: Observable<IShip[]>;
  constructor(ss: StarshipService) {
    this.ships = ss.getStarships();
  }

  ngOnInit() {
  }

  logSelectedShip(ship: IShip) {
    console.log('Ship selected: ', ship);
  }
}


/*

parent -> child
input, []

child -> parent
output, ()

*/