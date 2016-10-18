import { Component, OnInit } from '@angular/core';

export interface IFighter {
  name: string;
  weapons: string[];
  lifeSupport: boolean;
  ftl: string;
}

export interface IShip {
  name: string;
  FTL: string;
  weapons: string[];
  fighters: string | boolean;
  universe: string;
  // fighterTypes: IFighter[];
}

@Component({
  selector: 'ship-list',
  templateUrl: './ship-list.component.html',
  styleUrls: ['./ship-list.component.css']
})
export class ShipListComponent implements OnInit {
  ships = [{
    'name': 'Consitution',
    'FTL': 'Warp Drive',
    'weapons': [
      'Phasers',
      'Proton Torpedoes'
    ],
    fighters: false,
    universe: 'Star Trek'
  },
  {
    'name': 'Star Destroyer',
    'FTL': 'Hyperdrive',
    'weapons': [
      'Laser Cannons',
      'Ion cannons'
    ],
    fighters: 'TIE Fighters',
    universe: 'Star Wars'
  },
  {
    'name': 'Battlestar',
    'FTL': 'Jump Drive',
    'weapons': [
      'Flak Cannons',
      'Nuclear Missiles'
    ],
    fighters: 'Vipers',
    universe: 'Battlestar Galactica'
  }];
  constructor() { }

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