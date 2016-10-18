import { Component, OnInit } from '@angular/core';
import {StarshipService, IShip} from '../starship.service';

@Component({
  selector: 'ship-list',
  templateUrl: './ship-list.component.html',
  styleUrls: ['./ship-list.component.css']
})
export class ShipListComponent implements OnInit {
  ships: IShip[];
  constructor(ss: StarshipService) {
    ss.getStarships().subscribe((s: IShip[]) => {
      this.ships = s;
    });
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