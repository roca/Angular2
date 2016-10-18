import { Injectable } from '@angular/core';

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

@Injectable()
export class StarshipService {
  private ships = [{
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

  getStarships() {
    return this.ships;
  }
}

// ng g service starship