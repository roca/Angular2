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