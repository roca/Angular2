import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { IShip, MyService } from './my-service';

@Component({
  selector: 'my-app',
  providers: [MyService],
  templateUrl: 'ships.html'
})
export class ShipsComponent implements OnInit {
  ships1: Observable<IShip[]>;
  ships2: Promise<IShip[]>;

  constructor(private api: MyService) { }

  ngOnInit() {
    this.ships1 = this.api.loadShips1();
    this.ships2 = this.api.loadShips2();

    // This subscription will 'leak':
    // this.ships1.subscribe((x) => {
    //   console.log(x);
    // });
  }
}
