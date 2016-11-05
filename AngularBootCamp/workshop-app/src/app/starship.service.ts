import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

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
  constructor(private http: Http) { }

  getStarships() {
    return this.http.get('/assets/ships.json')
      .map((res: Response) => res.json());
  }
}

// ng g service starship