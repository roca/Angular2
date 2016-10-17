import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ship-list',
  template: 
  `
   <div>
        <p>
          ship-list worksxxxx!
        </p>

        <app-ship-card></app-ship-card>
        <div *ngFor="let ship of ships">
          <div>Name: {{ship.name}}</div> <br/>
        </div>
    </div>
  `,
  styleUrls: ['./ship-list.component.css']
})
export class ShipListComponent implements OnInit {
ships = [
  { "name": "Constitution", "FTL": "Warp Drive", "weapons": ["Phaser", "Proton Torpedos"] },
  { "name": "Star Destroyer", "FTL": "Hyper Drive", "weapons": ["Laser Cannons", "Ion cannons"] }
  ]


  constructor() { }

  ngOnInit() {
  }

}
