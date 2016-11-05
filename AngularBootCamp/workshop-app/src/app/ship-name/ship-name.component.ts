import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import 'rxjs/add/operator/map';

@Component({
  selector: 'ship-name',
  templateUrl: './ship-name.component.html',
  styleUrls: ['./ship-name.component.css']
})
export class ShipNameComponent implements OnInit {
  starshipNameGroup: FormGroup;
  constructor(fb: FormBuilder) {
    this.starshipNameGroup = fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]]
    });
    // https://bitbucket.org/jbalbes/ny-abc-oct-2016
    this.starshipNameGroup.controls['name'].valueChanges
      .map(val => 'USS ' + val)
      .subscribe(val => {
        console.log('starship: ', val);
      });
  }

  ngOnInit() {
  }
  launchShip() {
    console.log('To infinity and beyond in the ', this.starshipNameGroup.controls['name'].value);
  }
}
